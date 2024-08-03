import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({
  className = "",
  image,
  firstClickTests,
  onButtonContainerClick2,
  propHeight,
  propPadding,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  const onButtonContainerClick = useCallback(() => {
    // Please sync "Facilities 6" to the project
  }, []);

  return (
    <div className={[styles.card, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.textParent}>
        <div className={styles.text}>
          <div className={styles.firstClickTests}>{firstClickTests}</div>
          <div className={styles.whileMostPeople}>
            This is a facility description. You can write some description here.
          </div>
        </div>
        <div className={styles.button} onClick={onButtonContainerClick2}>
          <div className={styles.more}>More</div>
          <div className={styles.buttonInner} style={frameDivStyle}>
            <img className={styles.frameChild} alt="" src="/vector-1-1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  firstClickTests: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,

  /** Action props */
  onButtonContainerClick2: PropTypes.func,
};

export default Card;
