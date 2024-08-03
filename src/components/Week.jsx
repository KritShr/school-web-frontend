import CalendarDay from "./CalendarDay";
import PropTypes from "prop-types";
import styles from "./Week.module.css";

const Week = ({ className = "", day, day1, day2, day3, day4, day5, day6 }) => {
  return (
    <div className={[styles.week5, className].join(" ")}>
      <CalendarDay day={day} propColor="#0a1811" />
      <CalendarDay day={day1} propColor="#0a1811" />
      <CalendarDay day={day2} propColor="#0a1811" />
      <CalendarDay day={day3} propColor="#0a1811" />
      <CalendarDay day={day4} propColor="#0a1811" />
      <CalendarDay day={day5} propColor="#0a1811" />
      <CalendarDay day={day6} />
    </div>
  );
};

Week.propTypes = {
  className: PropTypes.string,
  day: PropTypes.string,
  day1: PropTypes.string,
  day2: PropTypes.string,
  day3: PropTypes.string,
  day4: PropTypes.string,
  day5: PropTypes.string,
  day6: PropTypes.string,
};

export default Week;
