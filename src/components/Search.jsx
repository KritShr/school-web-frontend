import PropTypes from "prop-types";
import styles from "../css/components/Search.module.css";

const Search = ({ className = "", value = "Value" }) => {
  return (
    <button className={[styles.search, className].join(" ")}>
      <div className={styles.value}>{value}</div>
      <div className={styles.xWrapper}>
        <img className={styles.xIcon} alt="" src="/x.svg" />
      </div>
    </button>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
};

export default Search;
