import PropTypes from "prop-types";
import styles from "../css/components/Gallery.module.css";
import stylesimg from "../css/page/Gallery3A.module.css";
import axiosInstance from "../utils/axios"
import { useState, useEffect } from "react"

const Gallery = ({ className = "" }) => {
  const limit = 3;
  const [galleries, setGalleries] = useState([]);

  useEffect(() => { //컴포넌트가 어마운트 될 때 한 번만 수행하도록 함
    fetchGalleries(limit);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchGalleries = async(limit) =>{
    const params = {
      limit
    }
    try{
      const response = await axiosInstance.get('/galleries', {params})
      setGalleries(response.data.galleries);
    } catch(err){
      console.error(err);
    }
  }

  return (
    <section className={[styles.gallery, className].join(" ")}>
      <div className={styles.galleryContent}>
        <div className={styles.galleryHeader}>
          <div className={styles.ourGalleryParent}>
            <h3 className={styles.ourGallery}>
              <span>Our</span>
              <span className={styles.gallery1}> Gallery</span>
            </h3>
            <div className={styles.galleryImage}>
              <div className={styles.imageContainer}>
                <div className={styles.outerImage} />
                <div className={styles.innerImage}>
                  <div className={styles.smallImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.galleryNavigation}>
          <div className={stylesimg.carouselImages}>
            {galleries.map((gallery)=>(
            <div key={gallery.image}>
              <img
                className={stylesimg.imageIcon10}
                alt={gallery.title}
                src={`${import.meta.env.VITE_SERVER_URL}/${gallery.image}`}
              />
            </div>
            ))}
                
          </div>
          <img className={styles.rectangleIcon} alt="" src="/rectangle1.svg" />
          
        </div>
      </div>
    </section>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
};

export default Gallery;
