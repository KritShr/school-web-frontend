import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "../css/components/CalendarDay.module.css";

const CalendarDay = ({ className = "", day, propColor }) => {
  const dayStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={[styles.calendarDay, className].join(" ")}>
      <div className={styles.day} style={dayStyle}>
        {day}
      </div>
    </div>
  );
};

CalendarDay.propTypes = {
  className: PropTypes.string,
  day: PropTypes.string,

  /** Style props */
  propColor: PropTypes.any,
};

export default CalendarDay;
