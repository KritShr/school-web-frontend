import OurMission1 from "./OurMission1";
import PropTypes from "prop-types";
import styles from "../css/components/OurMission.module.css";

const OurMission = ({ className = "" }) => {
  return (
    <section className={[styles.ourMission, className].join(" ")}>
      <header className={styles.property1default}>
        <div className={styles.tittle}>
          <a className={styles.ourMission1}>
            <span>Our</span>
            <span className={styles.mission}> Mission</span>
          </a>
          <div className={styles.missionImageWrapper}>
            <div className={styles.line}>
              <div className={styles.missionImageRectOuter} />
              <div className={styles.missionImageRectInner}>
                <div className={styles.missionImageRect} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <OurMission1 />
    </section>
  );
};

OurMission.propTypes = {
  className: PropTypes.string,
};

export default OurMission;
