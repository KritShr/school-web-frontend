import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button11 from "../components/Button11";
import Footer from "../components/Footer";
import styles from "./Contact.module.css";

const Contact = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.contact4}>
      <main className={styles.headerParent}>
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
              <div className={styles.learnersAcademyWrapper}>
                <div className={styles.learnersAcademy} onClick={onImageClick}>
                  Learners' Academy
                </div>
              </div>
            </div>
          </div>
          <div className={styles.headerInner}>
            <div className={styles.menuContainerParent}>
              <nav className={styles.menuContainer}>
                <nav className={styles.menuOptions}>
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
        <section className={styles.contactContainerWrapper}>
          <div className={styles.contactContainer}>
            <div className={styles.frameParent}>
              <div className={styles.contactHeaderWrapper}>
                <div className={styles.contactHeader}>
                  <h1 className={styles.contactUs2}>CONTACT US</h1>
                  <div className={styles.breadcrumbOptionsWrapper}>
                    <div className={styles.breadcrumbOptions}>
                      <a className={styles.home2}>Home</a>
                      <div className={styles.breadcrumbIcon}>
                        <img
                          className={styles.homeIcon}
                          loading="lazy"
                          alt=""
                          src="/vector-14.svg"
                        />
                      </div>
                      <a className={styles.contactUs3}>Contact us</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.findUsContainerWrapper}>
                <div className={styles.findUsContainer}>
                  <h3 className={styles.contactFindContainer}>
                    <span>{`Contact `}</span>
                    <span className={styles.findUs}>{`& Find us`}</span>
                  </h3>
                  <div className={styles.mapContainer}>
                    <div className={styles.mapPlaceholderParent}>
                      <div className={styles.mapPlaceholder} />
                      <div className={styles.mapContentWrapper}>
                        <div className={styles.mapContent} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.detailsContainerParent}>
                <div className={styles.detailsContainer}>
                  <div className={styles.detailsContainerChild} />
                  <div className={styles.detailsTitleParent}>
                    <h3 className={styles.detailsTitle}>Contact Info</h3>
                    <div className={styles.youCanAlways}>
                      You can always reach us via following contact details. We
                      will give our best to reach you as possible.
                    </div>
                    <div className={styles.phoneParent}>
                      <div className={styles.phone}>Phone:</div>
                      <div className={styles.phoneSpace}>
                        <p className={styles.p}>+977 976 242 2532</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.emailParent}>
                    <div className={styles.email}>Email:</div>
                    <div className={styles.claschoolnpgmailcom}>
                      claschoolnp@gmail.com
                    </div>
                  </div>
                  <div className={styles.addressParent}>
                    <div className={styles.address}>Address:</div>
                    <div className={styles.madhyapurThimi6}>
                      Madhyapur Thimi 6, Hulakroad
                    </div>
                  </div>
                </div>
                <div className={styles.interactiveMap}>
                  <div className={styles.interactiveMapChild} />
                  <iframe
                    className={styles.map}
                    src="https://www.google.co.kr/maps/place/Creative+Learners'+Academy/@27.684246,85.3874382,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb1a675f05b3e5:0x4a6f525dfb22d7f9!8m2!3d27.684246!4d85.3900131!16s%2Fg%2F1tfbr93_?entry=ttu"
                  />
                </div>
              </div>
              <div className={styles.touchContainerParent}>
                <div className={styles.touchContainer}>
                  <div className={styles.touchHeaderWrapper}>
                    <div className={styles.touchHeader}>
                      <h3 className={styles.contactFindContainer}>
                        <span>Get In</span>
                        <span className={styles.findUs}> Touch</span>
                      </h3>
                      <div className={styles.inputFieldContainer}>
                        <div className={styles.mapPlaceholderParent}>
                          <div className={styles.mapPlaceholder} />
                          <div className={styles.mapContentWrapper}>
                            <div className={styles.mapContent} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputField}>
                    <div className={styles.inputFieldChild} />
                    <div className={styles.name}>Name</div>
                  </div>
                </div>
                <div className={styles.emailSubjectFields}>
                  <div className={styles.inputField1}>
                    <div className={styles.inputFieldChild} />
                    <div className={styles.email1}>Email</div>
                  </div>
                  <div className={styles.inputField1}>
                    <div className={styles.inputFieldChild} />
                    <div className={styles.subject}>Subject</div>
                  </div>
                </div>
              </div>
              <div className={styles.inputField3}>
                <div className={styles.rectangleDiv} />
                <div className={styles.mesaageHere}>Mesaage here...</div>
              </div>
            </div>
            <Button11 />
          </div>
        </section>
      </main>
      <div className={styles.imageWrapper}>
        <img className={styles.imageIcon} alt="" src="/image2.svg" />
      </div>
      <Footer
        phoneAlt="/phonealt3.svg"
        propMarginTop="-1702px"
        propWidth="276.6px"
        propAlignSelf="stretch"
      />
    </div>
  );
};

export default Contact;
