import { useCallback } from "react";
import Card1 from "./Card1";
import PropTypes from "prop-types";
import styles from "./Team21.module.css";

const Team21 = ({ className = "" }) => {
  const onButtonContainerClick = useCallback(() => {
    // Please sync "Facilities 7" to the project
  }, []);

  return (
    <div className={[styles.property1variant2, className].join(" ")}>
      <div className={styles.property1variant2Child} />
      <div className={styles.property1variant2Item} />
      <Card1
        image="/image-2@2x.png"
        firstClickTests="Facility 2"
        propMargin="0"
        propTextDecoration="unset"
        onButtonContainerClick2={onButtonContainerClick}
        propHeight="5px"
        propPadding="4px 0px 0px"
      />
    </div>
  );
};

Team21.propTypes = {
  className: PropTypes.string,
};

export default Team21;
