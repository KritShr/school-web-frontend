import Week from "./Week";
import PropTypes from "prop-types";
import styles from "../css/components/Calendar.module.css";

const Calendar = ({ className = "" }) => {
  return (
    <div className={[styles.calendar, className].join(" ")}>
      <div className={styles.monthWrapper}>
        <div className={styles.month}>
          <img className={styles.arrowIcon} alt="" src="/arrow@2x.png" />
          <div className={styles.march2022Wrapper}>
            <b className={styles.march2022}>March 2022</b>
          </div>
          <img className={styles.arrowIcon1} alt="" src="/arrow-1.svg" />
        </div>
      </div>
      <div className={styles.weekdaysParent}>
        <div className={styles.weekdays}>
          <b className={styles.sun}>SUN</b>
          <b className={styles.sun}>MON</b>
          <b className={styles.sun}>TUE</b>
          <b className={styles.sun}>WED</b>
          <b className={styles.sun}>THU</b>
          <b className={styles.sun}>FRI</b>
          <b className={styles.sun}>SAT</b>
        </div>
        <div className={styles.weeks}>
          <Week
            day="29"
            day1="30"
            day2="31"
            day3="1"
            day4="2"
            day5="3"
            day6="4"
          />
          <Week
            day="5"
            day1="6"
            day2="7"
            day3="8"
            day4="9"
            day5="10"
            day6="11"
          />
          <Week
            day="12"
            day1="13"
            day2="14"
            day3="15"
            day4="16"
            day5="17"
            day6="18"
          />
          <Week
            day="19"
            day1="20"
            day2="21"
            day3="22"
            day4="23"
            day5="24"
            day6="25"
          />
          <Week
            day="26"
            day1="27"
            day2="28"
            day3="29"
            day4="30"
            day5="31"
            day6="1"
          />
        </div>
      </div>
    </div>
  );
};

Calendar.propTypes = {
  className: PropTypes.string,
};

export default Calendar;
