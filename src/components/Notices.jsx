import PropTypes from "prop-types";
import styles from "../css/components/Notices.module.css";

const Notices = ({ className = "" }) => {
  return (
    <div className={[styles.notices, className].join(" ")}>
      <div className={styles.rectangle} />
      <div className={styles.noticeItem}>
        <h3 className={styles.title}>Notice Title</h3>
        <div className={styles.noticeItemSeparator} />
        <div className={styles.september102021Wrapper}>
          <div className={styles.september102021}>{`September 10, 2021 `}</div>
        </div>
      </div>
      <div className={styles.descriptions}>
        <p className={styles.writeSomeDescriptions}>
          Write some descriptions for the facility. Write some descriptions for
          the facility. Write some descriptions for the facility. Write some
          descriptions for the facility. Write some descriptions for the
          facility. Write some descriptions for the facility.
        </p>
        <p className={styles.writeSomeDescriptions}>&nbsp;</p>
        <p className={styles.writeSomeDescriptions}>
          Write some descriptions for the facility. Write some descriptions for
          the facility. Write some descriptions for the facility.Write some
          descriptions for the facility. Write some descriptions for the
          facility. Write some descriptions for the facility.
        </p>
      </div>
    </div>
  );
};

Notices.propTypes = {
  className: PropTypes.string,
};

export default Notices;
