import FrameComponent from "../components/FrameComponent";
import Content from "../components/Content";
import EventCalendar from "../components/EventCalendar";
import Notice from "../components/Notice";
import Gallery from "../components/Gallery";
import NoticeButton from "../components/NoticeButton";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage4}>
      <img className={styles.imageIcon} alt="" />
      <FrameComponent />
      <Content />
      <EventCalendar />
      <Notice />
      <Gallery />
      <NoticeButton propWidth="1137px" />
      <footer className={styles.footer}>
        <div className={styles.footerBackground} />
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <div className={styles.footerLogo} />
            <img
              className={styles.tittleIcon}
              loading="lazy"
              alt=""
              src="/tittle1@2x.png"
            />
            <div className={styles.academyNameContainer}>
              <h2 className={styles.creativeLearnersAcademyContainer}>
                <p className={styles.creative}>Creative</p>
                <p className={styles.creative}>Learners'</p>
                <p className={styles.academy}>Academy</p>
              </h2>
            </div>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.linksParent}>
              <div className={styles.links}>Links</div>
              <div className={styles.quickLinks}>
                <div className={styles.home}>Home</div>
                <div className={styles.home}>About us</div>
                <div className={styles.management}>Management</div>
                <div className={styles.otherLinks}>
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
          <div className={styles.findUsLocationWrapper}>
            <div className={styles.findUsLocation}>
              <div className={styles.findUsTitle}>
                <div className={styles.findUs}>Find Us</div>
              </div>
              <div className={styles.madhyapurThimi6HulakroadParent}>
                <div className={styles.madhyapurThimi6}>
                  {" "}
                  Madhyapur Thimi 6, Hulakroad
                </div>
                <div className={styles.contactInfo}>
                  <div className={styles.phone}>
                    <div className={styles.phoneNumber}> +977 9762422532</div>
                    <img
                      className={styles.phoneAltIcon}
                      loading="lazy"
                      alt=""
                      src="/phonealt1.svg"
                    />
                  </div>
                  <div className={styles.emailIconParent}>
                    <div className={styles.emailIcon}>
                      <img
                        className={styles.envelopeIcon}
                        loading="lazy"
                        alt=""
                        src="/envelope1.svg"
                      />
                    </div>
                    <div className={styles.claschoolnpgmailcomWrapper}>
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
          <div className={styles.div}></div>
          <img className={styles.iconChild} alt="" />
          <img className={styles.iconItem} alt="" />
        </div>
        <img
          className={styles.safariIcon}
          loading="lazy"
          alt=""
          src="/safari1.svg"
        />
        <div className={styles.icon1}>
          <div className={styles.iconBd1} />
          <img className={styles.volleyballBallIcon1} alt="" />
          <div className={styles.div1}></div>
          <img className={styles.iconInner} alt="" />
          <img className={styles.lineIcon} alt="" />
        </div>
        <div className={styles.icon2}>
          <div className={styles.iconBd2} />
          <img className={styles.volleyballBallIcon2} alt="" />
          <div className={styles.div2}></div>
          <img className={styles.iconChild1} alt="" />
          <img className={styles.iconChild2} alt="" />
        </div>
        <div className={styles.copyright2024AllRightReWrapper}>
          <div className={styles.copyright2024}>
            Copyright © 2024. All Right Reserved by K-hana.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
