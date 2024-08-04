import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "../css/components/OurVision.module.css";

const OurVision = ({
  className = "",
  tittleWidth,
  vision,
  lineHeight,
  frameDivPadding,
  rectangleDivFlex,
  rectangleDivWidth,
}) => {
  const tittleStyle = useMemo(() => {
    return {
      width: tittleWidth,
    };
  }, [tittleWidth]);

  const lineStyle = useMemo(() => {
    return {
      height: lineHeight,
    };
  }, [lineHeight]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      flex: rectangleDivFlex,
      width: rectangleDivWidth,
    };
  }, [rectangleDivFlex, rectangleDivWidth]);

  return (
    <div className={[styles.ourVision, className].join(" ")}>
      <div className={styles.tittle} style={tittleStyle}>
        <h3 className={styles.ourVision1}>
          <span>Our</span>
          <span className={styles.vision}>{vision}</span>
        </h3>
        <div className={styles.lineWrapper}>
          <div className={styles.line} style={lineStyle}>
            <div className={styles.lineChild} />
            <div className={styles.lineInner} style={frameDiv1Style}>
              <div className={styles.frameChild} style={rectangleDiv1Style} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OurVision.propTypes = {
  className: PropTypes.string,
  vision: PropTypes.string,

  /** Style props */
  tittleWidth: PropTypes.any,
  lineHeight: PropTypes.any,
  frameDivPadding: PropTypes.any,
  rectangleDivFlex: PropTypes.any,
  rectangleDivWidth: PropTypes.any,
};

export default OurVision;
