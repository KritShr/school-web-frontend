import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./SubHeader.module.css";

const SubHeader = ({
  className = "",
  rectangle,
  image,
  propLeft,
  propRight,
  facilitiesIcon,
  propTextDecoration,
}) => {
  const imageIconStyle = useMemo(() => {
    return {
      left: propLeft,
      right: propRight,
    };
  }, [propLeft, propRight]);

  const facilities1Style = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div className={[styles.subHeader, className].join(" ")}>
      <img className={styles.rectangleIcon} alt="" src={rectangle} />
      <img
        className={styles.imageIcon}
        alt=""
        src={image}
        style={imageIconStyle}
      />
      <h1 className={styles.facilities}>FACILITIES</h1>
      <div className={styles.breadcrumbs}>
        <div className={styles.crumbs}>
          <a className={styles.home}>Home</a>
          <div className={styles.crumbIcon}>
            <img
              className={styles.facilitiesIcon}
              loading="lazy"
              alt=""
              src={facilitiesIcon}
            />
          </div>
          <div className={styles.facilities1} style={facilities1Style}>
            Facilities
          </div>
        </div>
      </div>
    </div>
  );
};

SubHeader.propTypes = {
  className: PropTypes.string,
  rectangle: PropTypes.string,
  image: PropTypes.string,
  facilitiesIcon: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propRight: PropTypes.any,
  propTextDecoration: PropTypes.any,
};

export default SubHeader;
