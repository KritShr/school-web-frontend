import PropTypes from "prop-types";
import styles from "./OurMission1.module.css";

const OurMission1 = ({ className = "" }) => {
  return (
    <div className={[styles.property1variant2, className].join(" ")}>
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image1.svg"
      />
      <div className={styles.missionVariantAlt}>
        <div className={styles.tittle}>
          <div className={styles.ourMission}>
            <span>Our</span>
            <span className={styles.mission}> Mission</span>
          </div>
          <div className={styles.missionImageWrapperAlt}>
            <div className={styles.line}>
              <div className={styles.missionImageRectOuterAlt} />
              <div className={styles.missionImageRectInnerAlt}>
                <div className={styles.missionImageRectAlt} />
              </div>
            </div>
          </div>
        </div>
        <blockquote className={styles.missionDescription}>
          "To empower students from diverse backgrounds through affordable,
          quality education, fostering lifelong learning and personal growth."
        </blockquote>
      </div>
    </div>
  );
};

OurMission1.propTypes = {
  className: PropTypes.string,
};

export default OurMission1;
