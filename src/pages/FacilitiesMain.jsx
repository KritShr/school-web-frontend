import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import styles from "./FacilitiesMain.module.css";

const FacilitiesMain = () => {
  return (
    <div className={styles.facilitiesMain}>
      <section className={styles.main}>
        <Header />
        <Hero />
      </section>
      <Footer phoneAlt="/phonealt.svg" />
    </div>
  );
};

export default FacilitiesMain;
