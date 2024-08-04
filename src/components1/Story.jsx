import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "../css/components/Story.module.css";
import { useNavigate } from "react-router-dom";

const Story = ({ className = "", propAlignSelf, propFlex, rectangle14 }) => {
  const storyStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  const navigate = useNavigate();

  const MoveToDetail = useCallback(() => {
    navigate("/notice-detail");
  }, [navigate]);

  return (
    <div className={[styles.story, className].join(" ")} style={storyStyle} onClick={MoveToDetail}>
      <img className={styles.storyChild} alt="" src={rectangle14} />
      <div className={styles.title}>notice title 1</div>
      <div className={styles.september102021}>{`September 10, 2021 `}</div>
    </div>
  );
};

Story.propTypes = {
  className: PropTypes.string,
  rectangle14: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
};

export default Story;
