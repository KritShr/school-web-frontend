import Team3 from "../components/Team3";
import styles from "../css/page/Root2.module.css";

const Root2 = () => {
  return (
    <div className={styles.root}>
      <section className={styles.component}>
        <Team3 image="/image-1@2x.png" firstClickTests="Facility 1" />
      </section>
      <Team3
        defaultShapeWidth="unset"
        defaultShapeMinHeight="710px"
        defaultShapeAlignSelf="stretch"
        image="/image-2@2x.png"
        firstClickTests="Facility 2"
      />
      <Team3
        defaultShapeWidth="631px"
        defaultShapeMinHeight="702px"
        defaultShapeAlignSelf="unset"
        image="/image-31@2x.png"
        firstClickTests="Facility 3"
      />
    </div>
  );
};

export default Root2;
