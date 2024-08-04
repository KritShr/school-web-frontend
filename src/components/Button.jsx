import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../css/components/Button.module.css";

const Button = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/gallery-3a");
  }, [navigate]);

  return (
    <button
      className={[styles.button, className].join(" ")}
      onClick={onButtonClick}
    >
      <div className={styles.viewMore}>View more</div>
      <img className={styles.viewIcon} alt="" src="/vector-1-2.svg" />
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
