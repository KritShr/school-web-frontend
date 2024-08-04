import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../css/components/GroupIcon.module.css";

const GroupIcon = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/about-us-4");
  }, [navigate]);

  return (
    <img
      className={[styles.contentRightChild, className].join(" ")}
      loading="lazy"
      alt=""
      src="/group-1451.svg"
      onClick={onGroupClick}
    />
  );
};

GroupIcon.propTypes = {
  className: PropTypes.string,
};

export default GroupIcon;
