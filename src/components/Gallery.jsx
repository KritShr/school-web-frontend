import PropTypes from "prop-types";
import styles from "./Gallery.module.css";

const Gallery = ({ className = "" }) => {
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
          <img className={styles.rectangleIcon} alt="" src="/rectangle1.svg" />
          <img
            className={styles.galleryNavigationChild}
            loading="lazy"
            alt=""
            src="/frame-4.svg"
          />
        </div>
      </div>
    </section>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
};

export default Gallery;
