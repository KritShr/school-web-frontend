import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Footer1.module.css";

const Footer1 = ({
  className = "",
  rectangle,
  propHeight,
  propTop,
  tittle,
  propWidth,
  propAlignSelf,
  propAlignSelf1,
  propAlignSelf2,
  phoneAlt,
  volleyballBall,
  line3,
  line4,
  volleyballBall1,
  line31,
  line41,
  volleyballBall2,
  line32,
  line42,
}) => {
  const rectangleIconStyle = useMemo(() => {
    return {
      height: propHeight,
      top: propTop,
    };
  }, [propHeight, propTop]);

  const footerRightStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const footerLinksStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const pageLinksStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const managementStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
    };
  }, [propAlignSelf2]);

  return (
    <footer className={[styles.footer, className].join(" ")}>
      <img
        className={styles.rectangleIcon}
        alt=""
        src={rectangle}
        style={rectangleIconStyle}
      />
      <div className={styles.footerBackground} />
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <div className={styles.brandLogo} />
          <img
            className={styles.tittleIcon}
            loading="lazy"
            alt=""
            src={tittle}
          />
          <div className={styles.footerSchoolName}>
            <h2 className={styles.creativeLearnersAcademyContainer}>
              <p className={styles.creative}>Creative</p>
              <p className={styles.creative}>Learners'</p>
              <p className={styles.academy}>Academy</p>
            </h2>
          </div>
        </div>
        <div className={styles.footerRight} style={footerRightStyle}>
          <div className={styles.footerLinks} style={footerLinksStyle}>
            <div className={styles.links}>Links</div>
            <div className={styles.pageLinks} style={pageLinksStyle}>
              <div className={styles.home}>Home</div>
              <div className={styles.home}>About us</div>
              <div className={styles.management} style={managementStyle}>
                Management
              </div>
              <div className={styles.menuLinks}>
                <div className={styles.notice}>Notice</div>
                <div className={styles.galleryContact}>
                  <div className={styles.galleryLink}>
                    <div className={styles.gallery}>Gallery</div>
                  </div>
                  <div className={styles.contactUs}>Contact us</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerAddress}>
          <div className={styles.footerLinks}>
            <div className={styles.addressTitle}>
              <div className={styles.findUs}>Find Us</div>
            </div>
            <div className={styles.addressDetails}>
              <div className={styles.madhyapurThimi6}>
                {" "}
                Madhyapur Thimi 6, Hulakroad
              </div>
              <div className={styles.addressContact}>
                <div className={styles.phoneNumber}>
                  <div className={styles.div}> +977 9762422532</div>
                  <img
                    className={styles.phoneAltIcon}
                    loading="lazy"
                    alt=""
                    src={phoneAlt}
                  />
                </div>
                <div className={styles.emailAddress}>
                  <div className={styles.email}>
                    <img
                      className={styles.envelopeIcon}
                      loading="lazy"
                      alt=""
                      src="/envelope.svg"
                    />
                  </div>
                  <div className={styles.emailId}>
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
        <img
          className={styles.volleyballBallIcon}
          alt=""
          src={volleyballBall}
        />
        <div className={styles.div1}></div>
        <img className={styles.iconChild} alt="" src={line3} />
        <img className={styles.iconItem} alt="" src={line4} />
      </div>
      <img
        className={styles.safariIcon}
        loading="lazy"
        alt=""
        src="/safari.svg"
      />
      <div className={styles.icon1}>
        <div className={styles.iconBd1} />
        <img
          className={styles.volleyballBallIcon1}
          alt=""
          src={volleyballBall1}
        />
        <div className={styles.div2}></div>
        <img className={styles.iconInner} alt="" src={line31} />
        <img className={styles.lineIcon} alt="" src={line41} />
      </div>
      <div className={styles.icon2}>
        <div className={styles.iconBd2} />
        <img
          className={styles.volleyballBallIcon2}
          alt=""
          src={volleyballBall2}
        />
        <div className={styles.div3}></div>
        <img className={styles.iconChild1} alt="" src={line32} />
        <img className={styles.iconChild2} alt="" src={line42} />
      </div>
      <div className={styles.copyright}>
        <div className={styles.copyright2024}>
          Copyright © 2024. All Right Reserved by K-hana.
        </div>
      </div>
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
  rectangle: PropTypes.string,
  tittle: PropTypes.string,
  phoneAlt: PropTypes.string,
  volleyballBall: PropTypes.string,
  line3: PropTypes.string,
  line4: PropTypes.string,
  volleyballBall1: PropTypes.string,
  line31: PropTypes.string,
  line41: PropTypes.string,
  volleyballBall2: PropTypes.string,
  line32: PropTypes.string,
  line42: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propTop: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propAlignSelf2: PropTypes.any,
};

export default Footer1;
