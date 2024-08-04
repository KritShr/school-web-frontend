import ContentLeft from "../components1/ContentLeft";
import styles from "../css/page/Notice1.module.css";

const Notice1 = () => {

  return (
    <div className={styles.notice}>
      <section className={styles.subHeaderParent}>
        <div className={styles.contentLeftWrapper}>
          <ContentLeft />
        </div>
      </section>
    </div>
  );
};

export default Notice1;
