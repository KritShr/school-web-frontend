import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/about-us-4");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/notice");
  }, [navigate]);

  const onButtonClick1 = useCallback(() => {
    navigate("/gallery-3a");
  }, [navigate]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.componentSetWrapper}>
        <div className={styles.property1defaultParent}>
          <img
            className={styles.property1defaultIcon}
            loading="lazy"
            alt=""
            src="/group-1451.svg"
            onClick={onGroupClick}
          />
          <img
            className={styles.property1defaultIcon}
            loading="lazy"
            alt=""
            src="/property-1variant2.svg"
            onClick={onGroupClick}
          />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.property1defaultParent}>
          <button className={styles.property1default} onClick={onButtonClick}>
            <div className={styles.more}>More</div>
            <div className={styles.moreIconWrapper}>
              <img className={styles.moreIcon} alt="" src="/vector-1-11.svg" />
            </div>
          </button>
          <button className={styles.property1variant2} onClick={onButtonClick}>
            <div className={styles.more}>More</div>
            <div className={styles.moreIconWrapper}>
              <img className={styles.moreIcon} alt="" src="/vector-1-11.svg" />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.button1}>
        <button className={styles.property1default1} onClick={onButtonClick1}>
          <h3 className={styles.viewMore}>View more</h3>
          <div className={styles.viewMoreIconWrapper}>
            <img
              className={styles.moreIcon}
              loading="lazy"
              alt=""
              src="/vector-1-2.svg"
            />
          </div>
        </button>
        <button className={styles.property1variant21} onClick={onButtonClick1}>
          <h3 className={styles.viewMore}>View more</h3>
          <div className={styles.viewMoreIconWrapper}>
            <img
              className={styles.moreIcon}
              loading="lazy"
              alt=""
              src="/vector-1-3.svg"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
