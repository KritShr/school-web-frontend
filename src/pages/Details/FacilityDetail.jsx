import { useNavigate, useParams } from "react-router-dom";
import styles from "../../Contact.module.css";
import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axios.js";

const FacilityDetail = () => {
  const { facilityId } = useParams();
  const [facility, setFacility] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isAuth = localStorage.getItem('isAuth');

  useEffect(() => {
    async function fetchFacility() {
      try {
        const response = await axiosInstance.get(`/facilities/${facilityId}?type=single`);
        setFacility(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFacility();
  }, [facilityId]);

  const navigate = useNavigate();
  const handleUpdate = () => {
    navigate(`/facilities/update/${facilityId}`);
  }

  const openPopup = (index) => {
    setCurrentImageIndex(index);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? facility.images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === facility.images.length - 1 ? 0 : prevIndex + 1));
  };

  if (!facility) {
    return <div>No Facility</div>;
  }

  return (
    <div className="px-40 py-10 sm:px-20 lg:px-72 bg-white justify-center">
      <div className={styles.contact4}>
        {/** title */}
        <h3 className="text-4xl font-bold text-center">
          {facility.title}
        </h3>

        {isAuth && (
          <div className="mt-2 flex justify-end mb-1">
            <button className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base" onClick={handleUpdate}>
              Update
            </button>
          </div>
        )}

        {/** image */}
        <div className="justify-center py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {facility.images && facility.images.length > 0 ? (
              facility.images.map((image, index) => (
                <div key={index} className="relative w-full overflow-hidden shadow-lg cursor-pointer" onClick={() => openPopup(index)}>
                  <img 
                    src={`${import.meta.env.VITE_SERVER_URL}/${image}`} 
                    alt={facility.title} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                  />
                </div>
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>  
        </div>

        {/** introduction */}
        <div>
          <h3 className="text-2xl leading-10 text-left font-medium" style={{ whiteSpace: 'pre-line' }}>
            {facility.description}
          </h3>
        </div>

        
        {/** Popup for full-screen image */}
{isPopupOpen && (
  <div className="fixed inset-0 -bg--text-default-default bg-opacity-45 flex items-center justify-center z-50">
    <button 
      onClick={closePopup} 
      className="absolute top-4 right-4 text-white"
      style={{ fontSize: '5rem' }}  // Explicit font size
    >
      &times;
    </button>
    <button 
      onClick={goToPreviousImage} 
      className="absolute left-4 text-white"
      style={{ fontSize: '8rem' }}  // Explicit font size
    >
      &#8249;
    </button>
    <img 
      src={`${import.meta.env.VITE_SERVER_URL}/${facility.images[currentImageIndex]}`} 
      alt={facility.title} 
      className="max-w-[90%] max-h-[80%]"  // Reduced size
    />
    <button 
      onClick={goToNextImage} 
      className="absolute right-4 text-white"
      style={{ fontSize: '8rem' }}  // Explicit font size
    >
      &#8250;
    </button>
  </div>
)}

      </div>
    </div>  
  );
};

export default FacilityDetail;
