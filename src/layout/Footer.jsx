import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "../css/layout/Footer.module.css";
import { useNavigate} from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const moveTo = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  return (
    <footer className="-bg--color-darkslategray-100 flex gap-5 px-10 py-10 sm:px-4 lg:px-40">
      {/** class logo */}
      <div className="flex w-1/3 lg:w-2/4">
        <div className="-bg--default-white px-5 py-5 text-center">
          <img
            className="size-56 mb-5"
            loading="lazy"
            alt=""
            src="/tittle@2x.png"
          />
          <h3 className="-text--color-darkslategray-100 text-4xl font-semibold">Creative <br/>Learners'<br/>Academy</h3>
        </div>
      </div>
      {/** links */}
      <div className="w-1/3 lg:w-1/4">
        <h2 className="-text--light font-bold text-4xl">Links</h2>
        <div className="py-8">
          <h3 className='-text--default-white font-medium text-2xl mb-3 cursor-pointer' onClick={() => moveTo('/')}>Home</h3>
          <h3 className='-text--default-white font-medium text-2xl mb-3 cursor-pointer' onClick={() => moveTo('/about-us')}>About Us</h3>
          <h3 className='-text--default-white font-medium text-2xl mb-3 cursor-pointer' onClick={() => moveTo('/management')}>Management</h3>
          <h3 className='-text--default-white font-medium text-2xl mb-3 cursor-pointer' onClick={() => moveTo('/notice')}>Notice</h3>
          <h3 className='-text--default-white font-medium text-2xl mb-3 cursor-pointer' onClick={() => moveTo('/gallery')}>Gallery</h3>
          <h3 className='-text--default-white font-medium text-2xl' onClick={() => moveTo('/contact')}>Contact Us</h3>    
        </div>
      </div>
      <div className="w-1/3 lg:w-1/4">
        <h2 className="-text--light font-bold text-4xl">Find Us</h2>
        <div className="py-8">
          <h3 className='-text--default-white font-medium text-2xl mb-3'>Madhyapur Thimi 6, Hulakroad</h3>
          <h3 className='-text--default-white font-medium text-2xl mb-3'>+977 9762422532</h3>
          <h3 className='-text--default-white font-medium text-2xl'>claschoolnp@gmail.com</h3>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

// <footer
//       className={[styles.footer, className].join(" ")}
//       style={footerStyle}
//     >
//       <div className={styles.footerContent}>
//         {/** 학교 로고 */}
//         <div className={styles.brandInfo} style={brandInfoStyle}>
//           <div className={styles.academyLogoBackground} />
          <img
            className={styles.tittleIcon}
            loading="lazy"
            alt=""
            src="/tittle@2x.png"
          />
//           <div className={styles.academy} style={academyStyle}>
//             <h2 className={styles.creativeLearnersAcademyContainer}>
//               <p className={styles.creative}>Creative</p>
//               <p className={styles.creative}>Learners'</p>
//               <p className={styles.academy1}>Academy</p>
//             </h2>
//           </div>
//         </div>

//         {/** links */}
//         <div className={styles.footerLinks}>
//           <div className={styles.linksContainer}>
//             <div className={styles.links}>Links</div>
//             <div className={styles.mainLinks}>
//               <div className={styles.link} onClick={() => onImageClick('/')}>Home</div>
//               <div className={styles.link} onClick={() => onImageClick('/about-us')}>About us</div>
//               <div className={styles.link} onClick={() => onImageClick('/management')}>Management</div>
//               <div className={styles.link} onClick={() => onImageClick('/notice')}>Notice</div>
//               <div className={styles.link} onClick={() => onImageClick('/gallery')}>Gallery</div>
//               <div className={styles.link} onClick={() => onImageClick('/contact')}>Contact us</div>
//             </div>
//           </div>
//         </div>

//         {/** find us */}
//         <div className={styles.contactInfo}>
//           <div className={styles.linksContainer}>
//             <div className={styles.addressContainer}>
//               <div className={styles.findUs}>Find Us</div>
//             </div>
//             <div className={styles.fullAddress}>
//               <div className={styles.madhyapurThimi6}>
//                 Madhyapur Thimi 6, Hulakroad
//               </div>
//               <div className={styles.madhyapurThimi6}>
//                 +977 9762422532
//               </div>
//               <div className={styles.madhyapurThimi6}>
//                 claschoolnp@gmail.com
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.copyright2024AllRightReWrapper}>
//         <div className={styles.copyright2024}>
//           Copyright © 2024. All Right Reserved by K-hana.
//         </div>
//       </div>
//     </footer>