import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../css/layout/Header.module.css";

const Header = ({ className = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onImageClick = useCallback((path) => {
    navigate(path);
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
            onClick={() => onImageClick('/')}
          />
          <div className={styles.academyInfo}>
            <a
              className={styles.creative}
              onClick={() => onImageClick('/')}
            >{`Creative `}</a>
            <div className={styles.schoolName}>
              <div className={styles.learnersAcademy} onClick={() => onImageClick('/')}>
                Learners' Academy
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.navItems}>
            <nav className={styles.linksContainer}>
              <nav className={styles.menuLinks}>
                <div className={styles.aboutUs} onClick={() => onImageClick('/about-us')}>
                  <a className={styles.aboutUs1}>About us</a>
                </div>
                <div className={styles.gallery} onClick={() => onImageClick('/gallery')}>
                  <a className={styles.gallery1}>Gallery</a>
                </div>
                <div className={styles.home} onClick={() => onImageClick('/')}>
                  <a className={styles.home1}>Home</a>
                </div>
                <div className={styles.management} onClick={() => onImageClick('/management')}>
                  <a className={styles.management1}>Management</a>
                </div>
                <div className={styles.notice} onClick={() => onImageClick('/notice')}>
                  <a className={styles.notice1}>Notice</a>
                </div>
                <div className={styles.facilities} onClick={() => onImageClick('/facilities')}>
                  <a className={styles.facilities1}>Facilities</a>
                </div>
                <div className={styles.contactUs} onClick={() => onImageClick('/contact')}>
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
    </section>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;