import { useMemo, useCallback } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import styles from "../css/components/Team2.module.css";

const Team2 = ({ className = "", team1Flex, teamShapeRight }) => {
  const team1Style = useMemo(() => {
    return {
      flex: team1Flex,
    };
  }, [team1Flex]);

  const teamShapeStyle = useMemo(() => {
    return {
      right: teamShapeRight,
    };
  }, [teamShapeRight]);

  const onButtonContainerClick = useCallback(() => {
    // Please sync "Facilities 5" to the project
  }, []);

  return (
    <div className={[styles.team1, className].join(" ")} style={team1Style}>
      <div className={styles.teamShape} style={teamShapeStyle} />
      <Card
        image="/image-1@2x.png"
        firstClickTests="Facility 1"
        onButtonContainerClick2={onButtonContainerClick}
        propHeight="unset"
        propPadding="8px 0px 0px"
      />
    </div>
  );
};

Team2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  team1Flex: PropTypes.any,
  teamShapeRight: PropTypes.any,
};

export default Team2;
