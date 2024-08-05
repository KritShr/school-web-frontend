import stylesBtn from "../css/components/Button.module.css";
import styles from "../css/page/Contact.module.css";
import axiosInstance from "../utils/axios";
import { useState } from "react"

const Contact = () => {
  const[contact, setContact] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange= (event)=>{
    const{name, value} = event.target;
    setContact(prevState=>({
      ...prevState, // 바꾸지 않는 값은 유지
      [name]: value // 바꾸는 값을 오버라이드
    }));
  }

  const handleSubmit = async(event) => {
    //contact 제출하기
    event.preventDefault();

    console.log(`email: ${email}\nname: ${name}\nmessage: ${message}`)
    const body = {
      ...product
    }
    try {
      await axiosInstance.post('/contacts', body);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.contact4}>
        <section className={styles.contactContainerWrapper}>
          <div className={styles.contactContainer}>
            <div className={styles.frameParent}>
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
                <form className={styles.touchContainer} onSubmit={handleSubmit}>
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
                    <div className={styles.name}>Name</div>
                  </div>
                  <div className={styles.inputField}>
                    <div className={styles.inputFieldChild} />
                    <div className={styles.name}>Email</div>
                  </div>
                  <div className={styles.inputField}>
                    <div className={styles.inputFieldChild} />
                    <div className={styles.name}>Title</div>
                  </div>
                  <div className={styles.inputField3}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.mesaageHere}>Mesaage here...</div>
                  </div>
                  <button className={[stylesBtn.button].join(" ")} >
                    <div className={stylesBtn.txt}>Send</div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Contact;
