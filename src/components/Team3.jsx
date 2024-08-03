import { useMemo } from "react";
import Team2 from "./Team2";
import Team31 from "./Team31";
import PropTypes from "prop-types";
import styles from "./Team3.module.css";

const Team3 = ({
  className = "",
  defaultShapeWidth,
  defaultShapeMinHeight,
  defaultShapeAlignSelf,
  image,
  firstClickTests,
}) => {
  const team11Style = useMemo(() => {
    return {
      width: defaultShapeWidth,
      minHeight: defaultShapeMinHeight,
      alignSelf: defaultShapeAlignSelf,
    };
  }, [defaultShapeWidth, defaultShapeMinHeight, defaultShapeAlignSelf]);

  return (
    <div className={[styles.team1, className].join(" ")} style={team11Style}>
      <Team2 team1Flex="unset" teamShapeRight="6px" />
      <Team31 image="/image-1@2x.png" firstClickTests="Facility 1" />
    </div>
  );
};

Team3.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  firstClickTests: PropTypes.string,

  /** Style props */
  defaultShapeWidth: PropTypes.any,
  defaultShapeMinHeight: PropTypes.any,
  defaultShapeAlignSelf: PropTypes.any,
};

export default Team3;
