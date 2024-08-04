import PropTypes from "prop-types";
import styles from "../../css/SubHeader.module.css";

const OtherSubHeader = ({mainTitle, subTitle}) => {
  const subTitleParts = subTitle ? subTitle.split(',') : [];
  return (
    <div className={[styles.subHeader, ""].join(" ")}>
      <img className={styles.imageIcon} alt="" src="/image2.svg" />
      <h1 className={styles.notice}>{mainTitle}</h1>
      <div className={styles.subHeaderButton}>
        <div className={styles.homeButton}>
          <a className={styles.home}>{subTitleParts[0]}</a>
          <div className={styles.homeButtonIcon}>
            <img
              className={styles.homeIcon}
              loading="lazy"
              alt=""
              src="/vector-13.svg"
            />
          </div>
          <div className={styles.notice1}>{subTitleParts[1]}</div>
        </div>
      </div>
    </div>
  );
};

OtherSubHeader.propTypes = {
  mainTitle: PropTypes.string,
  subTitle: PropTypes.string
};

export default OtherSubHeader;
