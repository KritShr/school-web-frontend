import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className={[styles.headerParent, className].join(" ")}>
      <header className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.headerContent}>
          <img
            className={styles.image3Icon}
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
            onClick={onImageClick}
          />
          <div className={styles.academyInfo}>
            <a
              className={styles.creative}
              onClick={onImageClick}
            >{`Creative `}</a>
            <div className={styles.schoolName}>
              <div className={styles.learnersAcademy} onClick={onImageClick}>
                Learners' Academy
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.navItems}>
            <nav className={styles.linksContainer}>
              <nav className={styles.menuLinks}>
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
      <div className={styles.image}>
        <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
        <div className={styles.promoBackground} />
        <img
          className={styles.radioButtonIcon}
          loading="lazy"
          alt=""
          src="/radio-button@2x.png"
        />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <button className={styles.button}>
            <div className={styles.moreInfo}>More info</div>
            <img className={styles.infoIcon} alt="" src="/info-icon.svg" />
          </button>
          <div className={styles.text}>
            <span className={styles.textTxt}>
              <span>{`Empowering future leaders through `}</span>
              <span>
                innovative education, fostering creativity, critical thinking,
                and global citizenship.
              </span>
            </span>
          </div>
          <h2 className={styles.tittle}>Introduction</h2>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
