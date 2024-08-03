import PropTypes from "prop-types";
import styles from "./Button11.module.css";

const Button11 = ({ className = "" }) => {
  return (
    <button className={[styles.button, className].join(" ")}>
      <div className={styles.sendMessage}>Send message</div>
    </button>
  );
};

Button11.propTypes = {
  className: PropTypes.string,
};

export default Button11;
