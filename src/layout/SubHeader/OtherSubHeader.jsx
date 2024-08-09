import PropTypes from "prop-types";
import styles from "../../css/page/Contact.module.css";

const OtherSubHeader = ({mainTitle, subTitle}) => {
  const subTitleParts = subTitle ? subTitle.split(',') : [];
  return (
    <div className="w-full -bg--medium text-center py-16">
      <div className={styles.contact4}>
        <h1 className="font-semibold text-6xl -text--default-white mt-3 mb-5" >{mainTitle}</h1>
        <h2 className="font-medium text-2xl -text--default-white mb-5">{subTitleParts[0] +' > '+ subTitleParts[1]} </h2>
      </div>
    </div>
  );
};

OtherSubHeader.propTypes = {
  mainTitle: PropTypes.string,
  subTitle: PropTypes.string
};

export default OtherSubHeader;
