import Button2 from "./Button2";
import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div className={[styles.filesParent, className].join(" ")}>
      <div className={styles.files}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle4.svg" />
        <div className={styles.files1}>someFilesUploaded.pdf</div>
        <div className={styles.files1}>someFilesUploaded.pdf</div>
        <div className={styles.files1}>someFilesUploaded.pdf</div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button2 nextPage="Go Notice" propMinWidth="95px" />
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
