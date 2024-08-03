import { useMemo, useCallback } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import styles from "./Team.module.css";

const Team = ({ className = "", team3AlignSelf, rectangleDivRight }) => {
  const team3Style = useMemo(() => {
    return {
      alignSelf: team3AlignSelf,
    };
  }, [team3AlignSelf]);

  const rectangleDivStyle = useMemo(() => {
    return {
      right: rectangleDivRight,
    };
  }, [rectangleDivRight]);

  const onButtonContainerClick = useCallback(() => {
    // Please sync "Facilities 6" to the project
  }, []);

  return (
    <div className={[styles.team3, className].join(" ")} style={team3Style}>
      <div className={styles.team3Child} style={rectangleDivStyle} />
      <Card
        image="/image-31@2x.png"
        firstClickTests="Facility 3"
        onButtonContainerClick2={onButtonContainerClick}
      />
    </div>
  );
};

Team.propTypes = {
  className: PropTypes.string,

  /** Style props */
  team3AlignSelf: PropTypes.any,
  rectangleDivRight: PropTypes.any,
};

export default Team;
