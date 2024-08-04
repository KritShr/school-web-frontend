import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../css/components/Button1.module.css";

const Button1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/notice");
  }, [navigate]);

  return (
    <button
      className={[styles.button, className].join(" ")}
      onClick={onButtonClick}
    >
      <div className={styles.more}>More</div>
      <img className={styles.moreIcon} alt="" src="/vector-1-11.svg" />
    </button>
  );
};

Button1.propTypes = {
  className: PropTypes.string,
};

export default Button1;
