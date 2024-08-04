import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({
  className = "",
  galleryColor,
  homeColor,
  facilitiesColor,
  contactUsColor,
  propColor,
}) => {
  const aboutUsStyle = useMemo(() => {
    return {
      color: galleryColor,
    };
  }, [galleryColor]);

  const galleryStyle = useMemo(() => {
    return {
      color: homeColor,
    };
  }, [homeColor]);

  const noticeStyle = useMemo(() => {
    return {
      color: facilitiesColor,
    };
  }, [facilitiesColor]);

  const facilitiesStyle = useMemo(() => {
    return {
      color: contactUsColor,
    };
  }, [contactUsColor]);

  const contactUsStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const navigate = useNavigate();

  const onImageClick = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headerChild} />
      <div className={styles.image3Parent}>
        <img
          className={styles.image3Icon}
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
          onClick={onImageClick('/')}
        />
        <div className={styles.brandContainer}>
          <a
            className={styles.creative}
            onClick={onImageClick(('/'))}
          >{`Creative `}</a>
          <div className={styles.academyName}>
            <div className={styles.learnersAcademy} onClick={onImageClick('/')}>
              Learners' Academy
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.navLinks}>
          <nav className={styles.linksContainer}>
            <nav className={styles.menuContainer}>
              <div className={styles.aboutUs}>
                <a className={styles.aboutUs1} style={aboutUsStyle} onClick={() => onImageClick('/about-us-4')}>
                  About us
                </a>
              </div>
              <div className={styles.gallery}>
                <a className={styles.gallery1} style={galleryStyle} onClick={() => onImageClick('/gallery-3a')}>
                  Gallery
                </a>
              </div>
              <div className={styles.home} onClick={onImageClick('/')}>
                <a className={styles.home1}>Home</a>
              </div>
              <div className={styles.management} onClick={() => onImageClick("/management")}>
                <a className={styles.management1}>Management</a>
              </div>
              <div className={styles.notice} onClick={() => onImageClick("/notice")}>
                <a className={styles.notice1} style={noticeStyle}>
                  Notice
                </a>
              </div>
              <div className={styles.facilities} onClick={() => onImageClick("/facilities-main")}>
                <a className={styles.facilities1} style={facilitiesStyle}>
                  Facilities
                </a>
              </div>
              <div className={styles.contactUs} onClick={() => onImageClick("/contact-4")}>
                <a className={styles.contactUs1} style={contactUsStyle}>
                  Contact us
                </a>
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
  );
};

Header.propTypes = {
  className: PropTypes.string,

  /** Style props */
  galleryColor: PropTypes.any,
  homeColor: PropTypes.any,
  facilitiesColor: PropTypes.any,
  contactUsColor: PropTypes.any,
  propColor: PropTypes.any,
};

export default Header;
