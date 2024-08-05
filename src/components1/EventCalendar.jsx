import PropTypes from "prop-types";
import styles from "../css/components/EventCalendar.module.css";

const EventCalendar = ({ className = "" }) => {
  return (
    <section className={[styles.eventCalendar, className].join(" ")}>
      <div className={styles.rectangle} />
      <h3 className={styles.eventCalendar1}>
        <span>Event</span>
        <span className={styles.calendar}> Calendar</span>
      </h3>
      <div className={styles.calendarContent}>
        <div className={styles.calendarDesign}>
          <div className={styles.outerCalendar} />
          <div className={styles.innerCalendar}>
            <div className={styles.smallCalendar} />
          </div>
        </div>
      </div>
      <div className={styles.component2} />
    </section>
  );
};

EventCalendar.propTypes = {
  className: PropTypes.string,
};

export default EventCalendar;
