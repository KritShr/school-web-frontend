import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "../css/components/Button2.module.css";

const Button2 = ({ className = "", nextPage, propMinWidth }) => {
  const nextPageStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <button className={[styles.button, className].join(" ")}>
      <div className={styles.nextPage} style={nextPageStyle}>
        {nextPage}
      </div>
      <div className={styles.nextPageIcon}>
        <img className={styles.nextIcon} alt="" src="/vector-1-12.svg" />
      </div>
    </button>
  );
};

Button2.propTypes = {
  className: PropTypes.string,
  nextPage: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default Button2;
