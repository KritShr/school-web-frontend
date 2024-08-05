import PropTypes from "prop-types";
import styles from "../../css/layout/SubHeader.module.css";

const OtherSubHeader = ({mainTitle, subTitle}) => {
  const subTitleParts = subTitle ? subTitle.split(',') : [];
  return (
    <div className={[styles.subHeader, ""].join(" ")}>
      <img className={styles.greenBox} alt="" src="/image2.svg" />
      <h1 className={styles.title}>
        {mainTitle}
      </h1>
      <div className={styles.subHeaderPath}>
          <a className={styles.path}>{subTitleParts[0]}</a>
          <div className={styles.homeButtonIcon}>
            <img
              className={styles.pathIcon}
              loading="lazy"
              alt=""
              src="/vector-13.svg"
            />
          </div>
          <div className={styles.path}>{subTitleParts[1]}</div>
        </div>
    </div>
  );
};

OtherSubHeader.propTypes = {
  mainTitle: PropTypes.string,
  subTitle: PropTypes.string
};

export default OtherSubHeader;
