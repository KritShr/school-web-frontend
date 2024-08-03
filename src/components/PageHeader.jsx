import PropTypes from "prop-types";
import styles from "./PageHeader.module.css";

const PageHeader = ({ className = "" }) => {
  return (
    <section className={[styles.pageHeader, className].join(" ")}>
      <div className={styles.subHeader}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle2.svg" />
        <h1 className={styles.aboutUs}>About us</h1>
        <div className={styles.homeLink}>
          <div className={styles.homeLink1}>
            <a className={styles.home}>Home</a>
            <div className={styles.homeIcon}>
              <img
                className={styles.homeIconChild}
                loading="lazy"
                alt=""
                src="/vector-11.svg"
              />
            </div>
            <a className={styles.aboutUs1}>About us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

PageHeader.propTypes = {
  className: PropTypes.string,
};

export default PageHeader;
