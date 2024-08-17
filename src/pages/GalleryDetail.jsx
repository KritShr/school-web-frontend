import { useParams } from "react-router-dom";
import styles from "../css/page/Contact.module.css";
import { useState, useEffect } from "react";
import axiosInstance from "../utils/axios.js";

const GalleryDetail = () => {
  const { galleryId } = useParams();
  const [gallery, setGallery] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const response = await axiosInstance.get(`/galleries/${galleryId}?type=single`);
        setGallery(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGallery();
  }, [galleryId]);

  const openPopup = (index) => {
    setCurrentImageIndex(index);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? gallery.images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === gallery.images.length - 1 ? 0 : prevIndex + 1));
  };

  if (!gallery) {
    return (
      <div>No gallery found</div>
    );
  }

  return (
    <div className="px-40 py-10 sm:px-20 lg:px-72 bg-white justify-center">
      <div className={styles.contact4}>
        {/** title */}
        <h3 className="text-4xl font-bold text-center">
          {gallery.title}
        </h3>

        {/** image */}
        <div className="justify-center py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gallery.images && gallery.images.length > 0 ? (
              gallery.images.map((image, index) => (
                <div key={index} className="relative w-full overflow-hidden shadow-lg cursor-pointer" onClick={() => openPopup(index)}>
                  <img 
                    src={`${import.meta.env.VITE_SERVER_URL}/${image}`} 
                    alt={gallery.title} 
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
          <h3 className="text-2xl leading-10 text-left font-medium">
            {gallery.description}
          </h3>
        </div>

        {/** Popup for full-screen image */}
        {isPopupOpen && (
          <div className="fixed inset-0 -bg--text-default-default bg-opacity-50 flex items-center justify-center z-50">
            <button onClick={closePopup} className="absolute top-4 right-4 text-white" style={{ fontSize: '5rem' }}>&times;</button>
            <button onClick={goToPreviousImage} className="absolute left-4 text-white" style={{ fontSize: '8rem' }}>&#8249;</button>
            <img 
              src={`${import.meta.env.VITE_SERVER_URL}/${gallery.images[currentImageIndex]}`} 
              alt={gallery.title} 
              className="max-w-[90%] max-h-[80%]"
            />
            <button onClick={goToNextImage} className="absolute right-4 text-white" style={{ fontSize: '8rem' }}>&#8250;</button>
          </div>
        )}
      </div>
    </div>  
  );
};

export default GalleryDetail;
