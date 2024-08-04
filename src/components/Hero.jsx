import SubHeader from "./SubHeader";
import Team2 from "./Team2";
import Team1 from "./Team1";
import Team from "./Team";
import PropTypes from "prop-types";
import styles from "./Hero.module.css";

const Hero = ({ className = "" }) => {
  return (
    <div className={[styles.hero, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.meetOurStaff}>
          <div className={styles.team1Wrapper}>
            <Team2 />
          </div>
          <Team1 />
          <Team />
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
