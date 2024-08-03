import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className={[styles.headerParent, className].join(" ")}>
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
          <div className={styles.creativeParent}>
            <a
              className={styles.creative}
              onClick={onImageClick}
            >{`Creative `}</a>
            <div className={styles.learnersAcademyWrapper}>
              <h3 className={styles.learnersAcademy} onClick={onImageClick}>
                Learners' Academy
              </h3>
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
      <div className={styles.subHeader}>
        <img className={styles.imageIcon} alt="" src="/image2.svg" />
        <h1 className={styles.management2}>management</h1>
        <div className={styles.subHeaderInner}>
          <div className={styles.homeParent}>
            <a className={styles.home2}>Home</a>
            <div className={styles.vectorWrapper}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/vector-12.svg"
              />
            </div>
            <div className={styles.management3}>Management</div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
