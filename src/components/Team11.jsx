import { useCallback } from "react";
import Card1 from "./Card1";
import PropTypes from "prop-types";
import styles from "./Team11.module.css";

const Team11 = ({ className = "" }) => {
  const onButtonContainerClick = useCallback(() => {
    // Please sync "Facilities 6" to the project
  }, []);

  return (
    <div className={[styles.property1variant2, className].join(" ")}>
      <div className={styles.property1variant2Child} />
      <div className={styles.property1variant2Item} />
      <Card1
        image="/image-31@2x.png"
        firstClickTests="Facility 3"
        onButtonContainerClick2={onButtonContainerClick}
      />
    </div>
  );
};

Team11.propTypes = {
  className: PropTypes.string,
};

export default Team11;
