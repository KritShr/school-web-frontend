import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent1.module.css";

const GroupComponent1 = ({
  className = "",
  propBoxShadow,
  propWidth,
  propWidth1,
  propAlignSelf,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
    };
  }, [propBoxShadow]);

  const frameDiv4Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv5Style = useMemo(() => {
    return {
      width: propWidth1,
      alignSelf: propAlignSelf,
    };
  }, [propWidth1, propAlignSelf]);

  return (
    <div
      className={[styles.property1variant2, className].join(" ")}
      style={groupDiv1Style}
    >
      <div className={styles.property1variant2Child} />
      <textarea className={styles.property1variant2Item} rows={14} cols={15} />
      <div className={styles.whileMostPeopleEnWrapper} style={frameDiv4Style}>
        <div className={styles.whileMostPeople}>ECA Coordinator/ Teacher</div>
      </div>
      <div className={styles.firstClickTestsWrapper}>
        <h3 className={styles.firstClickTests}>Mr. Sudip Rajbahak</h3>
      </div>
      <div className={styles.whileMostPeopleEnContainer} style={frameDiv5Style}>
        <div className={styles.whileMostPeople1}>
          Consectur orem ipsum dor amet, adipiscing elit, sed do eiusmod tem.
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBoxShadow: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default GroupComponent1;
