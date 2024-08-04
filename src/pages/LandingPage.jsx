import Content from "../components/Content";
import EventCalendar from "../components/EventCalendar";
import Notice from "../components/Notice";
import Gallery from "../components/Gallery";
import NoticeButton from "../components/NoticeButton";
import styles from "../css/page/LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage4}>
      <img className={styles.imageIcon} alt="" />
      <Content />
      <EventCalendar />
      <Notice />
      <Gallery />
      <NoticeButton propWidth="1137px" />
    </div>
  );
};

export default LandingPage;
