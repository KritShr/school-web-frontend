import Content from "../components/Content";
import EventCalendar from "../components/EventCalendar";
import Notice from "../components/Notice";
import Gallery from "../components/Gallery";
import styles from "../css/page/LandingPage.module.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const LandingPage = () => {

  const navigate = useNavigate();

  const onNoticeBtnClick = useCallback(() => {
    navigate("/notice");
  }, [navigate]);

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
