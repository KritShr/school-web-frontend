import PropTypes from "prop-types";
import styles from "../css/components/FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.rootInner, className].join(" ")}>
      <div className={styles.imageParent}>
        <div className={styles.image}>
          <img
            className={styles.property1defaultIcon}
            loading="lazy"
            alt=""
            src="/image-12@2x.png"
          />
          <img
            className={styles.property1variant2Icon}
            loading="lazy"
            alt=""
            src="/property-1variant21.svg"
          />
        </div>
        <div className={styles.image}>
          <img
            className={styles.property1defaultIcon}
            loading="lazy"
            alt=""
            src="/image-21@2x.png"
          />
          <img
            className={styles.property1variant2Icon1}
            loading="lazy"
            alt=""
            src="/property-1variant2-1.svg"
          />
        </div>
        <div className={styles.image}>
          <img
            className={styles.property1defaultIcon}
            loading="lazy"
            alt=""
            src="/image-32@2x.png"
          />
          <img
            className={styles.property1variant2Icon}
            loading="lazy"
            alt=""
            src="/property-1variant2-2.svg"
          />
        </div>
        <div className={styles.image}>
          <img
            className={styles.property1defaultIcon}
            loading="lazy"
            alt=""
            src="/image-4@2x.png"
          />
          <img
            className={styles.property1variant2Icon}
            loading="lazy"
            alt=""
            src="/property-1variant2-3.svg"
          />
        </div>
        <div className={styles.image}>
          <img
            className={styles.property1defaultIcon}
            loading="lazy"
            alt=""
            src="/image-5@2x.png"
          />
          <img
            className={styles.property1variant2Icon}
            loading="lazy"
            alt=""
            src="/property-1variant2-4.svg"
          />
        </div>
        <div className={styles.image}>
          <img
            className={styles.property1defaultIcon}
            loading="lazy"
            alt=""
            src="/image-12@2x.png"
          />
          <img
            className={styles.property1variant2Icon}
            loading="lazy"
            alt=""
            src="/property-1variant2-5.svg"
          />
        </div>
        <div className={styles.image}>
          <img
            className={styles.property1defaultIcon}
            loading="lazy"
            alt=""
            src="/image-7@2x.png"
          />
          <img
            className={styles.property1variant2Icon}
            loading="lazy"
            alt=""
            src="/property-1variant2-6.svg"
          />
        </div>
        <div className={styles.image}>
          <img
            className={styles.property1defaultIcon}
            loading="lazy"
            alt=""
            src="/image-8@2x.png"
          />
          <img
            className={styles.property1variant2Icon}
            loading="lazy"
            alt=""
            src="/property-1variant2-7.svg"
          />
        </div>
        <div className={styles.image}>
          <img
            className={styles.property1defaultIcon}
            loading="lazy"
            alt=""
            src="/image-9@2x.png"
          />
          <img
            className={styles.property1variant2Icon}
            loading="lazy"
            alt=""
            src="/property-1variant2-8.svg"
          />
        </div>
        <div className={styles.image}>
          <img
            className={styles.property1defaultIcon}
            loading="lazy"
            alt=""
            src="/image-10@2x.png"
          />
          <img
            className={styles.property1variant2Icon}
            loading="lazy"
            alt=""
            src="/property-1variant2-9.svg"
          />
        </div>
        <div className={styles.image}>
          <img
            className={styles.property1defaultIcon}
            alt=""
            src="/image-111@2x.png"
          />
          <img
            className={styles.property1variant2Icon}
            alt=""
            src="/property-1variant2-10.svg"
          />
        </div>
        <div className={styles.image}>
          <img
            className={styles.property1defaultIcon}
            alt=""
            src="/image-121@2x.png"
          />
          <img
            className={styles.property1variant2Icon}
            alt=""
            src="/property-1variant2-11.svg"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
