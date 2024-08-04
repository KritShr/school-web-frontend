import PropTypes from "prop-types";
import styles from "../css/SubHeader.module.css";

const SubHeader1 = ({ className = "" }) => {
  return (
    <div className={[styles.subHeader, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src="/image2.svg" />
      <h1 className={styles.notice}>Notice</h1>
      <div className={styles.subHeaderButton}>
        <div className={styles.homeButton}>
          <a className={styles.home}>Home</a>
          <div className={styles.homeButtonIcon}>
            <img
              className={styles.homeIcon}
              loading="lazy"
              alt=""
              src="/vector-13.svg"
            />
          </div>
          <div className={styles.notice1}>Notice</div>
        </div>
      </div>
    </div>
  );
};

SubHeader1.propTypes = {
  className: PropTypes.string,
};

export default SubHeader1;
