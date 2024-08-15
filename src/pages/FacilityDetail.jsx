import { useNavigate, useParams } from "react-router-dom";
import styles from "../css/page/Contact.module.css";
import { useState, useEffect } from "react";
import axiosInstance from "../utils/axios.js"

const FacilityDetail = () => {
  const { facilityId } = useParams();
  const [facility, setFacility] = useState([]); // Treat facility as an object
  const isAuth = localStorage.getItem('isAuth');
  useEffect(() => {
    async function fetchFacility() {
      try {
        const response = await axiosInstance.get(`/facilities/${facilityId}?type=single`);
        setFacility(response.data[0]); // Directly set response.data
      } catch (error) {
        console.error(error);
      }
    }
    fetchFacility();
  }, [facilityId]);

  const navigate = useNavigate();
  const handleUpdate = () => {
    console.log('move to Update Facility!')
    navigate(`/facilities/update/${facilityId}`);
  }

  if (!facility) {
    return (
      <div>No Facility</div>
    );
  }
  
  return (
    <div className="px-40 py-10 sm:px-20 lg:px-72 -bg-white justify-center">
      <div className={styles.contact4}>
        {/** title */}
        <h3 className="text-4xl font-bold text-center">
          {facility.title}
        </h3>

        {isAuth && (
            <div className="mt-2 flex justify-end mb-1">
              <button className="-bg--medium text-white px-3 py-1 rounded" onClick={handleUpdate}>Update</button>
            </div>
        )}

        {/** image */}
        <div className="justify-center py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {facility.images && facility.images.length > 0 ? (
              facility.images.map((image, index) => (
                <img key={index} src={`${import.meta.env.VITE_SERVER_URL}/${image}`} alt={facility.title} />
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

      </div>
    </div>  
  );
};

export default FacilityDetail;
