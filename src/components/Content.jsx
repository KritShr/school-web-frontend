import GroupIcon from "./GroupIcon";
import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.contentLeftParent}>
        <div className={styles.contentLeft}>
          <div className={styles.mottoParent}>
            <h3 className={styles.motto}>
              Creative education for practical life
            </h3>
            <div className={styles.mottoBackground}>
              <div className={styles.mottoContainer}>
                <div className={styles.mottoRect} />
                <div className={styles.innerMotto}>
                  <div className={styles.smallRect} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentRight}>
          <div className={styles.testimonial}>
            <div className={styles.testimonialContent}>
              <div className={styles.mottoBackground}>
                <div className={styles.text}>Mission</div>
              </div>
              <div className={styles.whileMostPeople}>
                To empower students from diverse backgrounds through affordable,
                quality education, fostering lifelong learning and personal
                growth
              </div>
            </div>
          </div>
          <div className={styles.anotherTestimonial}>
            <div className={styles.anotherQuote}>
              <div className={styles.text1}>Vision</div>
            </div>
            <div className={styles.whileMostPeople1}>
              Empowering future leaders through innovative education, fostering
              creativity, critical thinking, and global citizenship.
            </div>
          </div>
          <GroupIcon />
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
