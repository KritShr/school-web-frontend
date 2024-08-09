import { useCallback } from "react";
import { useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../css/layout/Header.module.css";
import styles_c from "../css/page/Contact.module.css"

const Header = ({ className = "" }) => {
  const navigate = useNavigate();

  const onImageClick = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  return (
    <div className="flex px-5 py-2">
      <div className={styles_c.contact4}>
        
        {/** logo & title */}
        <div className="flex w-full  items-center gap-3">
          <img
            className="h-20 w-20"
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
            onClick={() => onImageClick('/')}
          />
          <h2 className="flex relative w-full font-bold text-4xl">Creative Learners' Academy</h2>
        </div>

        {/** menu */}
        <div className="flex w-full items-center gap-7">
          <h3 className='font-medium text-2xl cursor-pointer' onClick={() => moveTo('/')}>Home</h3>
          <h3 className='font-medium text-2xl cursor-pointer' onClick={() => moveTo('/about-us')}>About Us</h3>
          <h3 className='font-medium text-2xl cursor-pointer' onClick={() => moveTo('/management')}>Management</h3>
          <h3 className='font-medium text-2xl cursor-pointer' onClick={() => moveTo('/notice')}>Notice</h3>
          <h3 className='font-medium text-2xl cursor-pointer' onClick={() => moveTo('/gallery')}>Gallery</h3>
          <h3 className='font-medium text-2xl cursor-pointer' onClick={() => moveTo('/contact')}>Contact Us</h3>
          <img
            className="size-auto"
            loading="lazy"
            alt=""
            src="/account.svg"
          /> 
        </div>
      </div>
      

    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;

// <section className={[styles.headerParent, className].join(" ")}>
// <header className={styles.header}>
//   <div className={styles.headerChild} />
//   <div className={styles.headerContent}>
//     <img
//       className={styles.image3Icon}
//       loading="lazy"
//       alt=""
//       src="/image-3@2x.png"
//       onClick={() => onImageClick('/')}
//     />
//     <div className={styles.academyInfo}>
//       <a
//         className={styles.creative}
//         onClick={() => onImageClick('/')}
//       >{`Creative `}</a>
//       <div className={styles.schoolName}>
//         <div className={styles.learnersAcademy} onClick={() => onImageClick('/')}>
//           Learners' Academy
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className={styles.navigation}>
//     <div className={styles.navItems}>
//       <nav className={styles.linksContainer}>
//         <nav className={styles.menuLinks}>
//           <div className={styles.aboutUs} onClick={() => onImageClick('/about-us')}>
//             <a className={styles.aboutUs1}>About us</a>
//           </div>
//           <div className={styles.gallery} onClick={() => onImageClick('/gallery')}>
//             <a className={styles.gallery1}>Gallery</a>
//           </div>
//           <div className={styles.home} onClick={() => onImageClick('/')}>
//             <a className={styles.home1}>Home</a>
//           </div>
//           <div className={styles.management} onClick={() => onImageClick('/management')}>
//             <a className={styles.management1}>Management</a>
//           </div>
//           <div className={styles.notice} onClick={() => onImageClick('/notice')}>
//             <a className={styles.notice1}>Notice</a>
//           </div>
//           <div className={styles.facilities} onClick={() => onImageClick('/facilities')}>
//             <a className={styles.facilities1}>Facilities</a>
//           </div>
//           <div className={styles.contactUs} onClick={() => onImageClick('/contact')}>
//             <a className={styles.contactUs1}>Contact us</a>
//           </div>
//         </nav>
//       </nav>
//       <img
//         className={styles.accountIcon}
//         loading="lazy"
//         alt=""
//         src="/account.svg"
//       />
//     </div>
//   </div>
// </header>
// </section>