import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "../css/Footer.module.css";
import { useNavigate} from "react-router-dom";

const Footer = ({
  className = "",
  phoneAlt,
  propMarginTop,
  propWidth,
  propAlignSelf,
}) => {
  const footerStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  const brandInfoStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const academyStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const navigate = useNavigate();

  const onImageClick = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  return (
    <footer
      className={[styles.footer, className].join(" ")}
      style={footerStyle}
    >
      <div className={styles.footerContent}>
        {/** 학교 로고 */}
        <div className={styles.brandInfo} style={brandInfoStyle}>
          <div className={styles.academyLogoBackground} />
          <img
            className={styles.tittleIcon}
            loading="lazy"
            alt=""
            src="/tittle@2x.png"
          />
          <div className={styles.academy} style={academyStyle}>
            <h2 className={styles.creativeLearnersAcademyContainer}>
              <p className={styles.creative}>Creative</p>
              <p className={styles.creative}>Learners'</p>
              <p className={styles.academy1}>Academy</p>
            </h2>
          </div>
        </div>

        {/** links */}
        <div className={styles.footerLinks}>
          <div className={styles.linksContainer}>
            <div className={styles.links}>Links</div>
            <div className={styles.mainLinks}>
              <div className={styles.link} onClick={() => onImageClick('/')}>Home</div>
              <div className={styles.link} onClick={() => onImageClick('/about-us')}>About us</div>
              <div className={styles.link} onClick={() => onImageClick('/management')}>Management</div>
              <div className={styles.link} onClick={() => onImageClick('/notice')}>Notice</div>
              <div className={styles.link} onClick={() => onImageClick('/gallery')}>Gallery</div>
              <div className={styles.link} onClick={() => onImageClick('/contact')}>Contact us</div>
            </div>
          </div>
        </div>

        {/** find us */}
        <div className={styles.contactInfo}>
          <div className={styles.linksContainer}>
            <div className={styles.addressContainer}>
              <div className={styles.findUs}>Find Us</div>
            </div>
            <div className={styles.fullAddress}>
              <div className={styles.madhyapurThimi6}>
                Madhyapur Thimi 6, Hulakroad
              </div>
              <div className={styles.madhyapurThimi6}>
                +977 9762422532
              </div>
              <div className={styles.madhyapurThimi6}>
                claschoolnp@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright2024AllRightReWrapper}>
        <div className={styles.copyright2024}>
          Copyright © 2024. All Right Reserved by K-hana.
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  phoneAlt: PropTypes.string,

  /** Style props */
  propMarginTop: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default Footer;