import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button2 from "../components/Button2";
import styles from "../css/page/Gallery3A.module.css";

const Gallery3A = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.gallery3a}>
      <main className={styles.subHeaderParent}>
        <section className={styles.galleryWrapper}>
          <div className={styles.gallery4}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle6.svg"
            />
            <div className={styles.image}>
              <div className={styles.imageChild} />
              <img className={styles.imageItem} alt="" />
              <img className={styles.imageInner} alt="" />
              <div className={styles.overlay}>
                <div className={styles.overlayChild} />
                <div className={styles.icon}>
                  <div className={styles.iconBd} />
                  <img className={styles.volleyballBallIcon} alt="" />
                  <div className={styles.div}></div>
                  <img className={styles.iconChild} alt="" />
                  <img className={styles.iconItem} alt="" />
                </div>
                <div className={styles.text}>
                  AfLorem ipsum dolor sit amet, consectetur adcing elit.
                </div>
              </div>
            </div>
            <div className={styles.galleryContainer}>
              <div className={styles.galleryItems}>
                <div className={styles.galleryTitleContainer}>
                  <h3 className={styles.ourGallery}>
                    <span>{` `}</span>
                    <span className={styles.our}>Our</span>
                    <span> Gallery</span>
                  </h3>
                  <div className={styles.galleryDivider}>
                    <div className={styles.titleDivider} />
                  </div>
                </div>
                <div className={styles.imageRow}>
                  <div className={styles.imagePlaceholder} />
                </div>
              </div>
            </div>
            <div className={styles.imageGrid}>
              <img
                className={styles.imageIcon1}
                alt=""
                src="/image-12@2x.png"
              />
              <img
                className={styles.imageIcon1}
                alt=""
                src="/image-21@2x.png"
              />
              <img
                className={styles.imageIcon1}
                alt=""
                src="/image-32@2x.png"
              />
              <img className={styles.imageIcon1} alt="" src="/image-4@2x.png" />
              <img className={styles.imageIcon1} alt="" src="/image-5@2x.png" />
              <img
                className={styles.imageIcon1}
                alt=""
                src="/image-12@2x.png"
              />
              <img className={styles.imageIcon1} alt="" src="/image-7@2x.png" />
              <img className={styles.imageIcon1} alt="" src="/image-8@2x.png" />
              <img className={styles.imageIcon1} alt="" src="/image-9@2x.png" />
            </div>
            <div className={styles.imageCarousel}>
              <div className={styles.carouselImages}>
                <img
                  className={styles.imageIcon10}
                  alt=""
                  src="/image-10@2x.png"
                />
                <img
                  className={styles.imageIcon10}
                  alt=""
                  src="/image-111@2x.png"
                />
                <img
                  className={styles.imageIcon10}
                  alt=""
                  src="/image-121@2x.png"
                />
              </div>
              <div className={styles.carouselButtons}>
                <button className={styles.button}>
                  <div className={styles.previousButtonIcon}>
                    <img
                      className={styles.previousButtonIconChild}
                      alt=""
                      src="/vector-1-13.svg"
                    />
                  </div>
                  <div className={styles.previousPage}>Previous page</div>
                </button>
                <Button2 nextPage="Next page" propMinWidth="99px" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery3A;
