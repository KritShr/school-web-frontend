import Calendar from "./Calendar";
import PropTypes from "prop-types";
import styles from "./Component.module.css";

const Component = ({ className = "" }) => {
  return (
    <div className={[styles.property1variant2, className].join(" ")}>
      <div className={styles.calendar}>
        <div className={styles.calendarBackground} />
        <Calendar />
      </div>
      <div className={styles.events}>
        <div className={styles.eventBackground} />
        <div className={styles.event1}>
          <h3 className={styles.eventName}>Event name 1</h3>
          <div className={styles.eventDate}>2024-07-08</div>
        </div>
        <div className={styles.event1}>
          <h3 className={styles.eventName1}>Event name 2</h3>
          <div className={styles.eventDate}>2024-07-09</div>
        </div>
        <div className={styles.event1}>
          <h3 className={styles.eventName1}>Event name 3</h3>
          <div className={styles.eventDate}>2024-07-11</div>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
