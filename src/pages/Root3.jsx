import Button3 from "../components/Button3";
import styles from "../css/page/Root3.module.css";

const Root3 = () => {
  return (
    <div className={styles.root}>
      <div className={styles.button}>
        <Button3
          propBackgroundColor="rgba(126, 126, 126, 0.7)"
          propTextDecoration="none"
        />
        <Button3 />
      </div>
    </div>
  );
};

export default Root3;
