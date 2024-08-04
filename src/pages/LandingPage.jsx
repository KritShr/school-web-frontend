import Content from "../components1/Content";
import EventCalendar from "../components1/EventCalendar";
import Notice from "../components1/Notice";
import Gallery from "../components1/Gallery";
import styles from "../css/page/LandingPage.module.css";

const LandingPage = () => {

  return (
    <div className={styles.landingPage4}>
      <img className={styles.imageIcon} alt="" />
      <Content />
      <EventCalendar />
      <Notice />
      <Gallery />
    </div>
  );
};

export default LandingPage;
