import FrameComponent4 from "../components/FrameComponent4";
import Notices from "../components/Notices";
import FrameComponent5 from "../components/FrameComponent5";
import Footer1 from "../components/Footer1";
import styles from "./NoticeDetail.module.css";

const NoticeDetail = () => {
  return (
    <div className={styles.noticeDetail}>
      <FrameComponent4 />
      <section className={styles.bodyWrapper}>
        <div className={styles.body}>
          <Notices />
          <FrameComponent5 />
        </div>
      </section>
      <Footer1
        rectangle="/rectangle5.svg"
        propHeight="1583px"
        propTop="-1095px"
        tittle="/tittle@2x.png"
        propWidth="unset"
        propAlignSelf="unset"
        propAlignSelf1="unset"
        propAlignSelf2="unset"
        phoneAlt="/phonealt4.svg"
        volleyballBall="pending_89:869"
        line3="pending_89:872"
        line4="pending_89:873"
        volleyballBall1="pending_89:880"
        line31="pending_89:883"
        line41="pending_89:884"
        volleyballBall2="pending_89:891"
        line32="pending_89:894"
        line42="pending_89:895"
      />
    </div>
  );
};

export default NoticeDetail;
