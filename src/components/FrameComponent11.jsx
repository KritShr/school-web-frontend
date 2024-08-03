import GroupComponent1 from "./GroupComponent1";
import PropTypes from "prop-types";
import styles from "./FrameComponent11.module.css";

const FrameComponent11 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.menuOptionsWrapper}>
        <div className={styles.menuOptions}>
          <div className={styles.aboutUs}>
            <div className={styles.property1default}>
              <div className={styles.aboutUs1}>About us</div>
            </div>
            <div className={styles.property1variant2}>
              <div className={styles.aboutUs1}>About us</div>
            </div>
          </div>
          <div className={styles.aboutUs}>
            <div className={styles.property1default}>
              <div className={styles.home1}>Home</div>
            </div>
            <div className={styles.property1variant2}>
              <div className={styles.home1}>Home</div>
            </div>
          </div>
          <div className={styles.aboutUs}>
            <div className={styles.property1default}>
              <div className={styles.management1}>Management</div>
            </div>
            <div className={styles.property1variant2}>
              <div className={styles.management1}>Management</div>
            </div>
          </div>
          <div className={styles.aboutUs}>
            <div className={styles.property1default}>
              <div className={styles.facilities1}>Facilities</div>
            </div>
            <div className={styles.property1variant2}>
              <div className={styles.facilities1}>Facilities</div>
            </div>
          </div>
          <div className={styles.aboutUs}>
            <div className={styles.property1default}>
              <div className={styles.notice1}>Notice</div>
            </div>
            <div className={styles.property1variant2}>
              <div className={styles.notice1}>Notice</div>
            </div>
          </div>
          <div className={styles.aboutUs}>
            <div className={styles.property1default}>
              <div className={styles.gallery1}>Gallery</div>
            </div>
            <div className={styles.property1variant2}>
              <div className={styles.gallery1}>Gallery</div>
            </div>
          </div>
          <div className={styles.aboutUs}>
            <div className={styles.property1default}>
              <div className={styles.contactUs1}>Contact us</div>
            </div>
            <div className={styles.property1variant2}>
              <div className={styles.contactUs1}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <textarea
            className={styles.frameInner}
            placeholder={`여기 사진 넣기
Ctrl+Shift+C 누르면 Copied as PNG 뜸
-> 이 어두운 회색 클릭
-> Ctrl + V`}
            rows={14}
            cols={15}
          />
          <div className={styles.description}>
            <div className={styles.whileMostPeople}>
              ECA Coordinator/ Teacher
            </div>
          </div>
          <div className={styles.test}>
            <h3 className={styles.firstClickTests}>Mr. Sudip Rajbahak</h3>
          </div>
          <div className={styles.secondDescription}>
            <div className={styles.whileMostPeople1}>
              Consectur orem ipsum dor amet, adipiscing elit, sed do eiusmod
              tem.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.componentSetWrapper}>
        <div className={styles.property1defaultParent}>
          <GroupComponent1
            propBoxShadow="unset"
            propWidth="272px"
            propWidth1="unset"
            propAlignSelf="stretch"
          />
          <GroupComponent1 />
        </div>
      </div>
    </div>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11;
