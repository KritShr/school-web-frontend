import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent from "../components/GroupComponent";
import styles from "./Management.module.css";

const Management = () => {
  return (
    <div className={styles.management}>
      <main className={styles.management3}>
        <div className={styles.icon}>
          <div className={styles.iconBd} />
          <img className={styles.volleyballBallIcon} alt="" />
          <div className={styles.div}></div>
          <img className={styles.iconChild} alt="" />
          <img className={styles.iconItem} alt="" />
        </div>
        <div className={styles.icon}>
          <div className={styles.iconBd} />
          <img className={styles.volleyballBallIcon} alt="" />
          <div className={styles.div}></div>
          <img className={styles.iconChild} alt="" />
          <img className={styles.iconItem} alt="" />
        </div>
        <div className={styles.icon}>
          <div className={styles.iconBd} />
          <img className={styles.volleyballBallIcon} alt="" />
          <div className={styles.div}></div>
          <img className={styles.iconChild} alt="" />
          <img className={styles.iconItem} alt="" />
        </div>
        <FrameComponent1 />
        <section className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.textParent}>
                  <h2 className={styles.text}>the Founder</h2>
                  <div className={styles.mrKrishnahariGhawa}>
                    MR. KrishnaHari Ghawa Shrestha
                  </div>
                </div>
                <div className={styles.textWrapper}>
                  <div className={styles.text1}>
                    Lorem ipsum dolor sit amet, consectetur adiping elit, sed do
                    eiusmod temp incit ut labore dolore magna aliqua. computer
                    science students Ut enim ad minim veniam. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit, sed do eiusmod temp
                    incididunt ut labore dol magna aliqua. olabisi oanbanjo
                    unuversity Ut enim ad minim Lorem ipsum eiusmod temp
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam Lorem ipsum dolor sit amet.
                  </div>
                </div>
                <div className={styles.facebookParent}>
                  <img
                    className={styles.facebookIcon}
                    loading="lazy"
                    alt=""
                    src="/facebook.svg"
                  />
                  <img
                    className={styles.facebookIcon}
                    loading="lazy"
                    alt=""
                    src="/whatsapp.svg"
                  />
                  <img
                    className={styles.facebookIcon}
                    loading="lazy"
                    alt=""
                    src="/instagram.svg"
                  />
                  <img
                    className={styles.facebookIcon}
                    loading="lazy"
                    alt=""
                    src="/twitter.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.meetOurStaff}>
              <div className={styles.rectangle} />
              <div className={styles.frameDiv}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.meetOurTeamParent}>
                    <h2 className={styles.meetOurTeamContainer}>
                      <span>Meet Our</span>
                      <span className={styles.team}> Team</span>
                    </h2>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.teamMemberImageParent}>
                        <div className={styles.teamMemberImage} />
                        <div className={styles.teamMemberNameWrapper}>
                          <div className={styles.teamMemberName} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.instanceParent}>
                  <GroupComponent
                    propMinWidth="224px"
                    propWidth="250.2px"
                    propAlignSelf="unset"
                    propWidth1="278.1px"
                  />
                  <GroupComponent
                    propMinWidth="224px"
                    propWidth="250.2px"
                    propAlignSelf="unset"
                    propWidth1="278.1px"
                  />
                  <GroupComponent
                    propMinWidth="224px"
                    propWidth="250.2px"
                    propAlignSelf="unset"
                    propWidth1="278.1px"
                  />
                </div>
              </div>
              <div className={styles.meetOurStaffInner}>
                <div className={styles.instanceGroup}>
                  <GroupComponent
                    propMinWidth="194px"
                    propWidth="250.2px"
                    propAlignSelf="unset"
                    propWidth1="278.1px"
                  />
                  <GroupComponent />
                </div>
              </div>
            </div>
            <footer className={styles.footer}>
              <div className={styles.footerBackground} />
              <div className={styles.frameParent1}>
                <div className={styles.footerLogoBackgroundParent}>
                  <div className={styles.footerLogoBackground} />
                  <img
                    className={styles.tittleIcon}
                    loading="lazy"
                    alt=""
                    src="/tittle@2x.png"
                  />
                  <div className={styles.creativeLearnersAcademyWrapper}>
                    <h1 className={styles.creativeLearnersAcademyContainer}>
                      <p className={styles.creative}>Creative</p>
                      <p className={styles.creative}>Learners'</p>
                      <p className={styles.academy}>Academy</p>
                    </h1>
                  </div>
                </div>
                <div className={styles.frameWrapper3}>
                  <div className={styles.linksParent}>
                    <h3 className={styles.links}>Links</h3>
                    <div className={styles.homeParent}>
                      <div className={styles.home}>Home</div>
                      <div className={styles.home}>About us</div>
                      <div className={styles.management1}>Management</div>
                      <div className={styles.noticeParent}>
                        <div className={styles.notice}>Notice</div>
                        <div className={styles.frameParent2}>
                          <div className={styles.galleryWrapper}>
                            <div className={styles.gallery}>Gallery</div>
                          </div>
                          <div className={styles.contactUs}>Contact us</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper4}>
                  <div className={styles.linksParent}>
                    <div className={styles.findUsWrapper}>
                      <h3 className={styles.findUs}>Find Us</h3>
                    </div>
                    <div className={styles.madhyapurThimi6HulakroadParent}>
                      <div className={styles.madhyapurThimi6}>
                        {" "}
                        Madhyapur Thimi 6, Hulakroad
                      </div>
                      <div className={styles.frameParent4}>
                        <div className={styles.parent}>
                          <div className={styles.div3}> +977 9762422532</div>
                          <img
                            className={styles.phoneAltIcon}
                            loading="lazy"
                            alt=""
                            src="/phonealt3.svg"
                          />
                        </div>
                        <div className={styles.frameParent5}>
                          <div className={styles.envelopeWrapper}>
                            <img
                              className={styles.envelopeIcon}
                              loading="lazy"
                              alt=""
                              src="/envelope.svg"
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
              <div className={styles.icon3}>
                <div className={styles.iconBd3} />
                <img className={styles.volleyballBallIcon3} alt="" />
                <div className={styles.div4}></div>
                <img className={styles.iconChild3} alt="" />
                <img className={styles.iconChild4} alt="" />
              </div>
              <img
                className={styles.safariIcon}
                loading="lazy"
                alt=""
                src="/safari.svg"
              />
              <div className={styles.icon4}>
                <div className={styles.iconBd4} />
                <img className={styles.volleyballBallIcon4} alt="" />
                <div className={styles.div5}></div>
                <img className={styles.iconChild5} alt="" />
                <img className={styles.iconChild6} alt="" />
              </div>
              <div className={styles.icon5}>
                <div className={styles.iconBd5} />
                <img className={styles.volleyballBallIcon5} alt="" />
                <div className={styles.div6}></div>
                <img className={styles.iconChild7} alt="" />
                <img className={styles.iconChild8} alt="" />
              </div>
              <div className={styles.copyright}>
                <div className={styles.copyright2024}>
                  Copyright © 2024. All Right Reserved by K-hana.
                </div>
              </div>
            </footer>
          </div>
          <img className={styles.imageIcon} alt="" src="/image-11@2x.png" />
        </section>
      </main>
    </div>
  );
};

export default Management;
