import { useCallback } from "react";
import Card1 from "./Card1";
import PropTypes from "prop-types";
import styles from "../css/components/Team31.module.css";

const Team31 = ({ className = "", image, firstClickTests }) => {
  const onButtonContainerClick = useCallback(() => {
    // Please sync "Facilities 5" to the project
  }, []);

  return (
    <div className={[styles.property1variant2, className].join(" ")}>
      <div className={styles.property1variant2Child} />
      <div className={styles.property1variant2Item} />
      <Card1
        image={image}
        firstClickTests={firstClickTests}
        propMargin="0"
        propTextDecoration="unset"
        onButtonContainerClick2={onButtonContainerClick}
        propHeight="unset"
        propPadding="8px 0px 0px"
      />
    </div>
  );
};

Team31.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  firstClickTests: PropTypes.string,
};

export default Team31;
