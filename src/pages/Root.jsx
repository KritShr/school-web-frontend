import Component from "../components/Component";
import Box from "../components/Box";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./Root.module.css";

const Root = () => {
  return (
    <div className={styles.root}>
      <section className={styles.frameParent}>
        <div className={styles.component2Wrapper}>
          <div className={styles.component2}>
            <div className={styles.property1default} />
            <Component />
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.property1default1} />
          <Box />
        </div>
      </section>
      <div className={styles.rootInner}>
        <FrameComponent3 />
      </div>
    </div>
  );
};

export default Root;
