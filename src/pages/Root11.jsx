import OurMission from "../components/OurMission";
import OurVision2 from "../components/OurVision2";
import styles from "./Root11.module.css";

const Root11 = () => {
  return (
    <div className={styles.root}>
      <OurMission />
      <section className={styles.ourVisionWrapper}>
        <OurVision2 />
      </section>
    </div>
  );
};

export default Root11;
