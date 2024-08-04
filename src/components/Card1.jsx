import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "../css/components/Card1.module.css";

const Card1 = ({
  className = "",
  image,
  firstClickTests,
  propMargin,
  propTextDecoration,
  onButtonContainerClick2,
  propHeight,
  propPadding,
}) => {
  const firstClickTestsStyle = useMemo(() => {
    return {
      margin: propMargin,
      textDecoration: propTextDecoration,
    };
  }, [propMargin, propTextDecoration]);

  const frameDiv6Style = useMemo(() => {
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
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.fourthContent}>
        <div className={styles.text}>
          <h3 className={styles.firstClickTests} style={firstClickTestsStyle}>
            {firstClickTests}
          </h3>
          <div className={styles.whileMostPeople}>
            This is a facility description. You can write some description here.
          </div>
        </div>
        <div className={styles.button} onClick={onButtonContainerClick2}>
          <div className={styles.more}>More</div>
          <div className={styles.buttonInner} style={frameDiv6Style}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/vector-1-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  firstClickTests: PropTypes.string,

  /** Style props */
  propMargin: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,

  /** Action props */
  onButtonContainerClick2: PropTypes.func,
};

export default Card1;
