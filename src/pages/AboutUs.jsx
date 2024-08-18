import styles from "../css/page/Contact.module.css";
import 'animate.css';  // Import animate.css
import { motion } from "framer-motion";  // Import framer-motion

const AboutUs = () => {
  return (
    <div className="px-40 py-10 sm:px-20 lg:px-72 -bg-white">
      <div className={styles.contact4}>

        {/* Introduction */}
        <div>
          <h3 className="text-2xl leading-10 text-center">
            Creative Learners' Academy is located in Madhyapur Thimi, Nepal, and
            stands as a beacon of affordable, quality education. Welcoming
            students from across the nation, the academy proudly offers
            scholarships from Nursery through Grade Ten, fostering a diverse
            community of learners. Emphasizing creativity, critical thinking,
            and global awareness, Creative Learners' Academy prepares students
            to excel as future leaders in a rapidly evolving world.
          </h3>
        </div>

        {/* Our Mission & Vision */}
        <div className="mt-10 flex gap-3 lg:gap-6">
          {/* Our Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
            className="px-10 py-7 w-full justify-center rounded-md bg-gradient-to-r -from--color-silver -to--color-silver"
          >
            <h2 className="text-2xl leading-10 text-center font-bold text-3d animate__animated animate__zoomIn mb-3">
              OUR MISSION
            </h2>
            <h3 className="text-2xl">
              To empower students from diverse backgrounds through affordable, quality education, fostering lifelong learning and personal growth.
            </h3>
          </motion.div>

          {/* Our Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
            className="px-10 py-7 w-full justify-center rounded-md bg-gradient-to-r -from--color-silver -to--color-silver"
          >
            <h2 className="text-2xl leading-10 text-center font-bold text-3d animate__animated animate__zoomIn mb-3">
              OUR VISION
            </h2>
            <h3 className="text-2xl">
              Empowering future leaders through innovative education, fostering creativity, critical thinking, and global citizenship.
            </h3>
          </motion.div>
        </div>

      </div>
    </div>  
  );
};

export default AboutUs;
