import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Story.module.css";

const Story = ({ className = "", propAlignSelf, propFlex, rectangle14 }) => {
  const storyStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div className={[styles.story, className].join(" ")} style={storyStyle}>
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
