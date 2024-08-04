import Hero from "../components/Hero";
import styles from "../css/page/FacilitiesMain.module.css";

const FacilitiesMain = () => {
  return (
    <div className={styles.facilitiesMain}>
      <section className={styles.main}>
        <Hero />
      </section>
    </div>
  );
};

export default FacilitiesMain;
