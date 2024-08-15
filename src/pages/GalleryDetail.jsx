import { useParams } from "react-router-dom";
import styles from "../css/page/Contact.module.css";
import { useState, useEffect } from "react";
import axiosInstance from "../utils/axios.js"

const GalleryDetail = () => {
  const { galleryId } = useParams();
  const [gallery, setGallery] = useState([]); // Treat facility as an object

  useEffect(() => {
    async function fetchGallery() {
      try {
        const response = await axiosInstance.get(`/galleries/${galleryId}?type=single`);
        setGallery(response.data[0]); // Directly set response.data
      } catch (error) {
        console.error(error);
      }
    }
    fetchGallery();
  }, [galleryId]);

      // Log the gallery images to ensure they are being fetched correctly
  console.log("Gallery Images:", gallery?.images);

  if (!gallery) {
    return (
      <div>No there is no</div>
    );
  }
  return (
    <div className="px-40 py-10 sm:px-20 lg:px-72 -bg-white justify-center">
      <div className={styles.contact4}>
        {/** title */}
        <h3 className="text-4xl font-bold text-center">
          {gallery.title}
        </h3>

        {/** image */}
        <div className="justify-center py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {gallery.images && gallery.images.length > 0 ? (
        gallery.images.map((image, index) => (
        <img key={index} src={`${import.meta.env.VITE_SERVER_URL}/${image}`} alt={gallery.title} />
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

      </div>
    </div>  
  );
};

export default GalleryDetail;
