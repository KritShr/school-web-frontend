import Notices from "../components/Notices";
import styles from "./NoticeDetail.module.css";

const NoticeDetail = () => {
  return (
    <div className={styles.noticeDetail}>
      <section className={styles.bodyWrapper}>
        <div className={styles.body}>
          <Notices />
        </div>
      </section>
    </div>
  );
};

export default NoticeDetail;
