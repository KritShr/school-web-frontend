import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button2 from "../components/Button2";
import Footer from "../components/Footer";
import styles from "./Gallery3A.module.css";

const Gallery3A = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.gallery3a}>
      <header className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.imageBanner}>
          <img
            className={styles.image3Icon}
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
            onClick={onImageClick}
          />
          <div className={styles.bannerCaption}>
            <a
              className={styles.creative}
              onClick={onImageClick}
            >{`Creative `}</a>
            <div className={styles.schoolNameContainer}>
              <div className={styles.learnersAcademy} onClick={onImageClick}>
                Learners' Academy
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.navigationLinks}>
            <nav className={styles.linksContainer}>
              <nav className={styles.linksWrapper}>
                <div className={styles.aboutUs}>
                  <a className={styles.aboutUs1}>About us</a>
                </div>
                <div className={styles.gallery}>
                  <a className={styles.gallery1}>Gallery</a>
                </div>
                <div className={styles.home} onClick={onImageClick}>
                  <a className={styles.home1}>Home</a>
                </div>
                <div className={styles.management}>
                  <a className={styles.management1}>Management</a>
                </div>
                <div className={styles.notice}>
                  <a className={styles.notice1}>Notice</a>
                </div>
                <div className={styles.facilities}>
                  <a className={styles.facilities1}>Facilities</a>
                </div>
                <div className={styles.contactUs}>
                  <a className={styles.contactUs1}>Contact us</a>
                </div>
              </nav>
            </nav>
            <img
              className={styles.accountIcon}
              loading="lazy"
              alt=""
              src="/account.svg"
            />
          </div>
        </div>
      </header>
      <main className={styles.subHeaderParent}>
        <section className={styles.subHeader}>
          <img className={styles.imageIcon} alt="" src="/image2.svg" />
          <h1 className={styles.gallery2}>GALLERY</h1>
          <div className={styles.breadcrumbs}>
            <div className={styles.breadcrumbLinks}>
              <a className={styles.home2}>Home</a>
              <div className={styles.breadcrumbIcon}>
                <img
                  className={styles.breadcrumbIconChild}
                  loading="lazy"
                  alt=""
                  src="/vector-15.svg"
                />
              </div>
              <a className={styles.gallery3}>Gallery</a>
            </div>
          </div>
        </section>
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
      <Footer
        phoneAlt="/phonealt3.svg"
        propMarginTop="unset"
        propWidth="unset"
        propAlignSelf="unset"
      />
    </div>
  );
};

export default Gallery3A;
