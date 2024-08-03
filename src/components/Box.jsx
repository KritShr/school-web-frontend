import PropTypes from "prop-types";
import styles from "./Box.module.css";

const Box = ({ className = "" }) => {
  return (
    <div className={[styles.property1variant2, className].join(" ")}>
      <div className={styles.property1variant2Child} />
      <div className={styles.notice1}>
        <div className={styles.noticeTitleParent}>
          <h3 className={styles.noticeTitle}>Event name 1</h3>
          <div className={styles.noticeDate}>2024-07-08</div>
        </div>
        <div className={styles.notice1Child} />
      </div>
      <div className={styles.notice1}>
        <div className={styles.noticeTitleParent}>
          <h3 className={styles.noticeTitle}>Event name 1</h3>
          <div className={styles.noticeDate}>2024-07-08</div>
        </div>
        <div className={styles.notice1Child} />
      </div>
      <div className={styles.notice1}>
        <div className={styles.noticeTitleParent}>
          <h3 className={styles.noticeTitle}>Event name 1</h3>
          <div className={styles.noticeDate}>2024-07-08</div>
        </div>
        <div className={styles.notice1Child} />
      </div>
      <div className={styles.notice1}>
        <div className={styles.noticeTitleParent}>
          <h3 className={styles.noticeTitle}>Event name 1</h3>
          <div className={styles.noticeDate}>2024-07-08</div>
        </div>
        <div className={styles.notice1Child} />
      </div>
    </div>
  );
};

Box.propTypes = {
  className: PropTypes.string,
};

export default Box;
