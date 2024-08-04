import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../css/components/Notice.module.css";
import stylesBtn from "../css/components/Button.module.css";


const Notice = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/notice");
  }, [navigate]);

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
        <button
          className={[stylesBtn.button, className].join(" ")}
          onClick={onButtonClick}
        >
          <div className={stylesBtn.txt}>More</div>
          <img className={stylesBtn.icon} alt="" src="/vector-1-11.svg" />
        </button>
    </section>
  );
};

Notice.propTypes = {
  className: PropTypes.string,
};

export default Notice;
