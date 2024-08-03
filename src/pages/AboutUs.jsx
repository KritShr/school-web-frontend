import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import OurVision from "../components/OurVision";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.aboutUs4}>
      <header className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.image3Parent}>
          <img
            className={styles.image3Icon}
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
            onClick={onImageClick}
          />
          <div className={styles.creativeParent}>
            <a
              className={styles.creative}
              onClick={onImageClick}
            >{`Creative `}</a>
            <div className={styles.learnersAcademy}>
              <div className={styles.learnersAcademy1} onClick={onImageClick}>
                Learners' Academy
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navigationAndUser}>
          <div className={styles.navigation}>
            <nav className={styles.navMenu}>
              <nav className={styles.navLinks}>
                <div className={styles.aboutUs}>
                  <a className={styles.aboutUs1}>About us</a>
                </div>
                <div className={styles.gallery}>
                  <a className={styles.gallery1}>Gallery</a>
                </div>
                <div className={styles.home} onClick={onImageClick}>
                  <a className={styles.home1}>Home</a>
                </div>
                <div className={styles.management}>
                  <a className={styles.management1}>Management</a>
                </div>
                <div className={styles.notice}>
                  <a className={styles.notice1}>Notice</a>
                </div>
                <div className={styles.facilities}>
                  <a className={styles.facilities1}>Facilities</a>
                </div>
                <div className={styles.contactUs}>
                  <a className={styles.contactUs1}>Contact us</a>
                </div>
              </nav>
            </nav>
            <img
              className={styles.accountIcon}
              loading="lazy"
              alt=""
              src="/account.svg"
            />
          </div>
        </div>
      </header>
      <PageHeader />
      <section className={styles.missionVision}>
        <div className={styles.missionVisionContentParent}>
          <div className={styles.missionVisionContent}>
            Creative Learners' Academy is located in Madhyapur Thimi, Nepal, and
            stands as a beacon of affordable, quality education. Welcoming
            students from across the nation, the academy proudly offers
            scholarships from Nursery through Grade Ten, fostering a diverse
            community of learners. Emphasizing creativity, critical thinking,
            and global awareness, Creative Learners' Academy prepares students
            to excel as future leaders in a rapidly evolving world.
          </div>
          <div className={styles.missionVisionTitles}>
            <OurVision
              tittleWidth="197px"
              vision=" Mission"
              lineHeight="unset"
              frameDivPadding="unset"
              rectangleDivFlex="unset"
              rectangleDivWidth="100px"
            />
            <OurVision vision=" Vision" />
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.rectangle} />
        <div className={styles.footerContent}>
          <div className={styles.academyInfo}>
            <div className={styles.academyLogo} />
            <img
              className={styles.tittleIcon}
              loading="lazy"
              alt=""
              src="/tittle2@2x.png"
            />
            <div className={styles.academyNameContainer}>
              <h2 className={styles.creativeLearnersAcademyContainer}>
                <p className={styles.learners}>Creative</p>
                <p className={styles.learners}>Learners'</p>
                <p className={styles.academy}>Academy</p>
              </h2>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.linkItems}>
              <div className={styles.links}>Links</div>
              <div className={styles.primaryLinks}>
                <div className={styles.home2}>Home</div>
                <div className={styles.home2}>About us</div>
                <div className={styles.management2}>Management</div>
                <div className={styles.secondaryLinks}>
                  <div className={styles.notice2}>Notice</div>
                  <div className={styles.galleryContact}>
                    <div className={styles.galleryLink}>
                      <div className={styles.gallery2}>Gallery</div>
                    </div>
                    <div className={styles.contactUs2}>Contact us</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.findUsInfoWrapper}>
            <div className={styles.findUsInfo}>
              <div className={styles.findUsTitle}>
                <div className={styles.findUs}>Find Us</div>
              </div>
              <div className={styles.madhyapurThimi6HulakroadParent}>
                <div className={styles.madhyapurThimi6}>
                  {" "}
                  Madhyapur Thimi 6, Hulakroad
                </div>
                <div className={styles.contactIcons}>
                  <div className={styles.phone}>
                    <div className={styles.placeholder}> +977 9762422532</div>
                    <img
                      className={styles.phoneAltIcon}
                      loading="lazy"
                      alt=""
                      src="/phonealt2.svg"
                    />
                  </div>
                  <div className={styles.email}>
                    <div className={styles.emailIcon}>
                      <img
                        className={styles.envelopeIcon}
                        loading="lazy"
                        alt=""
                        src="/envelope2.svg"
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
          <div className={styles.div}></div>
          <img className={styles.iconChild} alt="" />
          <img className={styles.iconItem} alt="" />
        </div>
        <img
          className={styles.safariIcon}
          loading="lazy"
          alt=""
          src="/safari2.svg"
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

export default AboutUs;
