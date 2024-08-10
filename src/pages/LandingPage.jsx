import Calendar from "../components1/Calendar";
import LandingNotice from "../components1/LandingNotice";
import Gallery from "../components1/Gallery";
import styles from "../css/page/Contact.module.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const moveToAboutUs = () =>{
    navigate('/about-us');
  }

  return (
    <div className="px-10 py-10 sm:px-4 lg:px-40">
      <div className={styles.contact4}>
        
        {/** mission & vision */}
        <div className="px-10 py-20 items-center">
          <h3 className="text-4xl text-center font-bold mb-16 -text--medium">Creative education for practical life</h3>
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

            <div className="py-10 w-full">
              <button onClick={moveToAboutUs} className="rounded-full -bg--light text-center w-32 h-32 -text--medium text-8xl shadow-md hover:shadow-inner" >></button>
            </div>
            
          </div>
        </div>

        {/** event calendar */}
        <div className="px-10 py-20 -bg--color">
          <h3 className="text-4xl text-center font-bold mb-16 -text--medium">Event Calendar</h3>
            <Calendar />
        </div>

        {/** notice */}
        <div className="px-10 py-20">
        <h3 className="text-4xl text-center font-bold mb-16 -text--medium">Notice</h3>
          <LandingNotice />
        </div>

        {/** gallery */}
        <div className="px-10 py-20">
        <h3 className="text-4xl text-center font-bold mb-16 -text--medium">Gallery</h3>
          <Gallery />
        </div>
      </div>
    </div>
  );
    
    
};

export default LandingPage;
