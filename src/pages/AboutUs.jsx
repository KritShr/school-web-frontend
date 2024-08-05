import OurVision from "../components/OurVision";
import styles from "../css/page/AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs4}>
      <section className={styles.missionVision}>
        <div className={styles.missionVisionContentParent}>
          <div className={styles.missionVisionContent}>
            Creative Learners' Academy is located in Madhyapur Thimi, Nepal, and
            stands as a beacon of affordable, quality education. Welcoming
            students from across the nation, the academy proudly offers
            scholarships from Nursery through Grade Ten, fostering a diverse
            community of learners. Emphasizing creativity, critical thinking,
            and global awareness, Creative Learners' Academy prepares students
            to excel as future leaders in a rapidly evolving world.
          </div>
          <div className={styles.missionVisionTitles}>
            <OurVision
              tittleWidth="197px"
              vision=" Mission"
              lineHeight="unset"
              frameDivPadding="unset"
              rectangleDivFlex="unset"
              rectangleDivWidth="100px"
            />
            <OurVision vision=" Vision" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
