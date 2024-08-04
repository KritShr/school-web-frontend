import PropTypes from "prop-types";
import styles from "../../css/Header.module.css";

const FrameComponent = ({ className = "" }) => {

  return (
    <section className={[styles.headerParent, className].join(" ")}>
      <div className={styles.image}>
        <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
        <div className={styles.promoBackground} />
        <img
          className={styles.radioButtonIcon}
          loading="lazy"
          alt=""
          src="/radio-button@2x.png"
        />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <button className={styles.button}>
            <div className={styles.moreInfo}>More info</div>
            <img className={styles.infoIcon} alt="" src="/info-icon.svg" />
          </button>
          <div className={styles.text}>
            <span className={styles.textTxt}>
              <span>{`Empowering future leaders through `}</span>
              <span>
                innovative education, fostering creativity, critical thinking,
                and global citizenship.
              </span>
            </span>
          </div>
          <h2 className={styles.tittle}>Introduction</h2>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
