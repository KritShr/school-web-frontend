import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({
  className = "",
  propMinWidth,
  propWidth,
  propAlignSelf,
  propWidth1,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv3Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth1,
    };
  }, [propAlignSelf, propWidth1]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.instanceChild} />
      <textarea className={styles.instanceItem} rows={14} cols={15} />
      <div className={styles.whileMostPeopleEnWrapper} style={frameDiv2Style}>
        <div className={styles.whileMostPeople}>ECA Coordinator/ Teacher</div>
      </div>
      <div className={styles.firstClickTestsWrapper}>
        <h3 className={styles.firstClickTests}>Mr. Sudip Rajbahak</h3>
      </div>
      <div className={styles.whileMostPeopleEnContainer} style={frameDiv3Style}>
        <div className={styles.whileMostPeople1}>
          Consectur orem ipsum dor amet, adipiscing elit, sed do eiusmod tem.
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default GroupComponent;
