import PropTypes from "prop-types";
import styles from "../css/components/OurVision1.module.css";

const OurVision1 = ({ className = "" }) => {
  return (
    <div className={[styles.property1variant2, className].join(" ")}>
      <div className={styles.tittleParent}>
        <div className={styles.tittle}>
          <div className={styles.ourVision}>
            <span>Our</span>
            <span className={styles.vision}> Vision</span>
          </div>
          <div className={styles.lineWrapper}>
            <div className={styles.line}>
              <div className={styles.visionTitleRectInner} />
              <div className={styles.visionTitleRect}>
                <div className={styles.visionTitleRectAlt} />
              </div>
            </div>
          </div>
        </div>
        <blockquote className={styles.text}>
          "Empowering future leaders through innovative education, fostering
          creativity, critical thinking, and global citizenship."
        </blockquote>
      </div>
      <img className={styles.imageIcon} alt="" src="/image-13.svg" />
    </div>
  );
};

OurVision1.propTypes = {
  className: PropTypes.string,
};

export default OurVision1;
