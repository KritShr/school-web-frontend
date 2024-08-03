import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent11 from "../components/FrameComponent11";
import styles from "./Root1.module.css";

const Root1 = () => {
  return (
    <div className={styles.root}>
      <FrameComponent2 />
      <FrameComponent11 />
    </div>
  );
};

export default Root1;
