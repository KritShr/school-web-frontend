import OurVision1 from "./OurVision1";
import PropTypes from "prop-types";
import styles from "../css/components/OurVision2.module.css";

const OurVision2 = ({ className = "" }) => {
  return (
    <div className={[styles.ourVision, className].join(" ")}>
      <header className={styles.property1default}>
        <div className={styles.tittle}>
          <a className={styles.ourVision1}>
            <span>Our</span>
            <span className={styles.vision}> Vision</span>
          </a>
          <div className={styles.visionDescription}>
            <div className={styles.line}>
              <div className={styles.visionDescRectOuter} />
              <div className={styles.visionDescRectInner}>
                <div className={styles.visionDescRect} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <OurVision1 />
    </div>
  );
};

OurVision2.propTypes = {
  className: PropTypes.string,
};

export default OurVision2;
