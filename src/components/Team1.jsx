import { useMemo, useCallback } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import styles from "../css/components/Team1.module.css";

const Team1 = ({
  className = "",
  team2AlignSelf,
  teamInstanceShapeHeadersRight,
}) => {
  const team2Style = useMemo(() => {
    return {
      alignSelf: team2AlignSelf,
    };
  }, [team2AlignSelf]);

  const teamInstanceShapeHeadersStyle = useMemo(() => {
    return {
      right: teamInstanceShapeHeadersRight,
    };
  }, [teamInstanceShapeHeadersRight]);

  const onButtonContainerClick = useCallback(() => {
    // Please sync "Facilities 7" to the project
  }, []);

  return (
    <div className={[styles.team2, className].join(" ")} style={team2Style}>
      <div
        className={styles.teamInstanceShapeHeaders}
        style={teamInstanceShapeHeadersStyle}
      />
      <Card
        image="/image-2@2x.png"
        firstClickTests="Facility 2"
        onButtonContainerClick2={onButtonContainerClick}
        propHeight="5px"
        propPadding="4px 0px 0px"
      />
    </div>
  );
};

Team1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  team2AlignSelf: PropTypes.any,
  teamInstanceShapeHeadersRight: PropTypes.any,
};

export default Team1;
