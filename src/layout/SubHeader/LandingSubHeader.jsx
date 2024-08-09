import PropTypes from "prop-types";
import styles from "../../css/layout/Header.module.css";
import styles_c from "../../css/page/Contact.module.css";

const FrameComponent = ({ className = "" }) => {

  return (
    <section className={[styles.headerParent, className].join(" ")}>
      <div className={styles.image}>
        <div className={styles.rectangleParent}>
          <div className="py-10 px-10">
            <div className={styles_c.contact4}>
              <h3 className="text-left text-4xl font-bold mt-20 mb-16">Introduction</h3>
              <h3 className="text-2xl text-left font-semibold">
                Empowering future leaders through innovative education, fostering creativity, critical thinking, and global citizenship.
              </h3>
            </div>  
          </div>
        </div>
        
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
