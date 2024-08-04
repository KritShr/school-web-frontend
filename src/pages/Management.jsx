import GroupComponent from "../components/GroupComponent";
import styles from "../css/page/Management.module.css";

const Management = () => {
  return (
    <div className={styles.management}>
      <main className={styles.management3}>
        
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
          </div>
          <img className={styles.imageIcon} alt="" src="/image-11@2x.png" />
        </section>
      </main>
    </div>
  );
};

export default Management;
