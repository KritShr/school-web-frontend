import NoticeButton from "./NoticeButton";
import PropTypes from "prop-types";
import styles from "../css/components/Notice.module.css";

const Notice = ({ className = "" }) => {
  return (
    <section className={[styles.notice, className].join(" ")}>
      <div className={styles.rectangle} />
      <div className={styles.noticeContent}>
        <div className={styles.noticeHeader}>
          <h3 className={styles.notice1}>Notice</h3>
        </div>
        <div className={styles.noticeDesign}>
          <div className={styles.noticeRect} />
          <div className={styles.innerNotice}>
            <div className={styles.smallNoticeRect} />
          </div>
        </div>
      </div>
      <div className={styles.box} />
      <NoticeButton />
    </section>
  );
};

Notice.propTypes = {
  className: PropTypes.string,
};

export default Notice;
