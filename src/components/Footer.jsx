import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

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

  return (
    <footer
      className={[styles.footer, className].join(" ")}
      style={footerStyle}
    >
      <div className={styles.footerBackground} />
      <div className={styles.footerContent}>
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
        <div className={styles.footerLinks}>
          <div className={styles.linksContainer}>
            <div className={styles.links}>Links</div>
            <div className={styles.mainLinks}>
              <div className={styles.home}>Home</div>
              <div className={styles.home}>About us</div>
              <div className={styles.management}>Management</div>
              <div className={styles.subLinks}>
                <div className={styles.notice}>Notice</div>
                <div className={styles.galleryContact}>
                  <div className={styles.galleryContainer}>
                    <div className={styles.gallery}>Gallery</div>
                  </div>
                  <div className={styles.contactUs}>Contact us</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.linksContainer}>
            <div className={styles.addressContainer}>
              <div className={styles.findUs}>Find Us</div>
            </div>
            <div className={styles.fullAddress}>
              <div className={styles.madhyapurThimi6}>
                {" "}
                Madhyapur Thimi 6, Hulakroad
              </div>
              <div className={styles.communication}>
                <div className={styles.phone}>
                  <div className={styles.div}> +977 9762422532</div>
                  <img
                    className={styles.phoneAltIcon}
                    loading="lazy"
                    alt=""
                    src={phoneAlt}
                  />
                </div>
                <div className={styles.emailInfo}>
                  <div className={styles.emailContainer}>
                    <img
                      className={styles.envelopeIcon}
                      loading="lazy"
                      alt=""
                      src="/envelope.svg"
                    />
                  </div>
                  <div className={styles.emailAddress}>
                    <div className={styles.claschoolnpgmailcom}>
                      {" "}
                      claschoolnp@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.icon}>
        <div className={styles.iconBd} />
        <img className={styles.volleyballBallIcon} alt="" />
        <div className={styles.div1}></div>
        <img className={styles.iconChild} alt="" />
        <img className={styles.iconItem} alt="" />
      </div>
      <img
        className={styles.safariIcon}
        loading="lazy"
        alt=""
        src="/safari.svg"
      />
      <div className={styles.icon1}>
        <div className={styles.iconBd1} />
        <img className={styles.volleyballBallIcon1} alt="" />
        <div className={styles.div2}></div>
        <img className={styles.iconInner} alt="" />
        <img className={styles.lineIcon} alt="" />
      </div>
      <div className={styles.icon2}>
        <div className={styles.iconBd2} />
        <img className={styles.volleyballBallIcon2} alt="" />
        <div className={styles.div3}></div>
        <img className={styles.iconChild1} alt="" />
        <img className={styles.iconChild2} alt="" />
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
