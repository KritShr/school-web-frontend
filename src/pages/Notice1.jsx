import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SubHeader1 from "../components/SubHeader1";
import ContentLeft from "../components/ContentLeft";
import Footer1 from "../components/Footer1";
import styles from "./Notice1.module.css";

const Notice1 = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.notice}>
      <header className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.image3Parent}>
          <img
            className={styles.image3Icon}
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
            onClick={onImageClick}
          />
          <div className={styles.imageBannerContent}>
            <a
              className={styles.creative}
              onClick={onImageClick}
            >{`Creative `}</a>
            <div className={styles.imageBannerSchoolName}>
              <div className={styles.learnersAcademy} onClick={onImageClick}>
                Learners' Academy
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerInner}>
          <div className={styles.frameParent}>
            <nav className={styles.frameWrapper}>
              <nav className={styles.aboutUsParent}>
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
                <div className={styles.notice1}>
                  <a className={styles.notice2}>Notice</a>
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
      <section className={styles.subHeaderParent}>
        <SubHeader1 />
        <div className={styles.contentLeftWrapper}>
          <ContentLeft />
        </div>
      </section>
      <Footer1
        rectangle="/rectangle3.svg"
        tittle="/tittle@2x.png"
        phoneAlt="/phonealt3.svg"
        volleyballBall="pending_89:813"
        line3="pending_89:816"
        line4="pending_89:817"
        volleyballBall1="pending_89:824"
        line31="pending_89:827"
        line41="pending_89:828"
        volleyballBall2="pending_89:835"
        line32="pending_89:838"
        line42="pending_89:839"
      />
    </div>
  );
};

export default Notice1;
