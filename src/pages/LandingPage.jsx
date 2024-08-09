import Calendar from "../components1/Calendar";
import LandingNotice from "../components1/LandingNotice";
import Gallery from "../components1/Gallery";
import styles from "../css/page/Contact.module.css";

const LandingPage = () => {

  return (
    <div className="px-10 py-10 sm:px-4 lg:px-40">
      <div className={styles.contact4}>
        
        {/** mission & vision */}
        <div className="px-10 py-10 -bg--neutrals-n100">
          <h3 className="text-3xl text-center font-bold mb-10 -text--medium">Creative education for practical life</h3>
          {/** our mission */}
          <div className="flex gap-10">
            <div className="py-7 w-full justify-center rounded-md">
              <h2  className="text-2xl leading-10 text-center font-semibold -text--text-default-default mb-3">OUR MISSION</h2>
              <h3 className="text-xl">
                To empower students from diverse backgrounds through affordable, quality education, fostering lifelong learning and personal growth.
              </h3>
            </div>

            {/** our vision */}
            <div className="py-7 w-full justify-center rounded-md">
              <h2  className="text-2xl leading-10 text-center font-semibold -text--text-default-default mb-3">OUR VISION</h2>
              <h3 className="text-xl">
                Empowering future leaders through innovative education, fostering creativity, critical thinking, and global citizenship.
              </h3>
            </div>

            <button className="rounded-full -bg--light text-center w-40 h-40 -text--medium text-6xl shadow-md hover:shadow-inner" >></button>
          </div>
        </div>

        {/** event calendar */}
        <div className="px-10 py-10 -bg--color">
          <h3 className="text-3xl text-center font-bold mb-10 -text--medium">Event Calendar</h3>
            <Calendar />
        </div>

        {/** notice */}
        <div className="px-10 py-10 -bg--neutrals-n100">
        <h3 className="text-3xl text-center font-bold mb-10 -text--medium">Notice</h3>
          <LandingNotice />
        </div>

        {/** gallery */}
        <div className="px-10 py-10 -bg--neutrals-n200">
        <h3 className="text-3xl text-center font-bold mb-10 -text--medium">Gallery</h3>
          <Gallery />
        </div>
      </div>
    </div>
  );
    
    
};

export default LandingPage;
