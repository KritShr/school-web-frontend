import { useParams, useNavigate } from "react-router-dom";
import styles from "../../Contact.module.css";
import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axios.js"

const EventDetail = () => {
  const { newsId } = useParams();
  const [news, setNews] = useState([]); // Treat facility as an object
  const isAuth = localStorage.getItem('isAuth');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  console.log(newsId)

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axiosInstance.get(`/news/${newsId}?type=single`);
        setNews(response.data[0]); // Directly set response.data
      } catch (error) {
        console.error(error);
      }
    }
    fetchNews();
  }, [newsId]);

  const navigate = useNavigate();
  const handleUpdate = () => {
    navigate(`/newses/update/${newsId}`);
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

  if (!news) {
    return (
      <div>No there is no</div>
    );
  }
  return (
    <div className="px-40 py-10 sm:px-20 lg:px-72 -bg-white justify-center">
      <div className={styles.contact4}>
        {/** title */}
        <h3 className="text-4xl font-bold text-center">
          {news.title}
        </h3>

        {isAuth ==='true'&& (
          <div className="mt-2 flex justify-end mb-1">
            <button className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base" onClick={handleUpdate}>
              Update
            </button>
          </div>
        )}

        {/** image */}
        <div className="justify-center py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {news.images && news.images.length > 0 ? (
              news.images.map((image, index) => (
                <div key={index} className="relative w-full overflow-hidden shadow-lg cursor-pointer" onClick={() => openPopup(index)}>
                  <img 
                    src={`/BackApi/${image}`} 
                    alt={news.title} 
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
            {news.description}
          </h3>
        </div>

        {/** Popup for full-screen image */}
        {isPopupOpen && (
          <div className="-bg--text-default-default bg-opacity-50 fixed inset-0 flex items-center justify-center z-50">
            <button onClick={closePopup} className="absolute top-4 right-4 text-white text-4xl">&times;</button>
            <button onClick={goToPreviousImage} className="absolute left-4 text-white text-5xl">&#8249;</button>
            <img 
              src={`/BackApi/${news.images[currentImageIndex]}`} 
              alt={news.title} 
              className="max-w-[90%] max-h-[80%]"
            />
            <button onClick={goToNextImage} className="absolute right-4 text-white text-5xl">&#8250;</button>
          </div>
        )}

      </div>
    </div>  
  );
};

export default EventDetail;
