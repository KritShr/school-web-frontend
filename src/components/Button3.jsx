import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "../css/components/Button3.module.css";

const Button3 = ({
  className = "",
  propBackgroundColor,
  propTextDecoration,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const sendMessageStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <button
      className={[styles.property1variant2, className].join(" ")}
      style={buttonStyle}
    >
      <div className={styles.sendMessage} style={sendMessageStyle}>
        Send message
      </div>
    </button>
  );
};

Button3.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propTextDecoration: PropTypes.any,
};

export default Button3;
