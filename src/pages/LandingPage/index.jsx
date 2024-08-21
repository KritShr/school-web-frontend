import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import 'animate.css';  // Import animate.css
import styles from "../../Contact.module.css";
import NepaliCalendar from './Sections/NepaliCalendar';
import LandingNotice from "./Sections/Notice";
import Gallery from "./Sections/Gallery";

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "vector@2x.png",
    "vector@2x.png",
    "vector@2x.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const navigate = useNavigate();

  const moveToAboutUs = () => {
    navigate('/about-us');
  }

  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3, 
  });

  const { ref: calendarRef, inView: calendarInView } = useInView({
    triggerOnce: true,
    threshold: 0.3, 
  });

  const { ref: noticeRef, inView: noticeInView } = useInView({
    triggerOnce: true,
    threshold: 0.3, 
  });

  const { ref: galleryRef, inView: galleryInView } = useInView({
    triggerOnce: true,
    threshold: 0.3, 
  });

  const missionVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const visionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  return (
    <div className="sm:px-0 lg:px-0">
      <div className={styles.contact4}>
        {/* Intro */}
        <div className="relative w-full h-[500px] overflow-hidden">
          <div 
            className="absolute inset-0 z-0 flex flex-col transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateY(-${currentSlide * 100}%)`
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-[500px]">
                <img 
                  key={index}
                  src={slide} 
                  alt={`Slide ${index + 1}`} 
                  className="w-full h-[500px] object-cover"
                />
                <div 
                  className="absolute inset-0"
                  style={{
                    background: "circle-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))"
                  }}
                ></div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col justify-center w-full h-full pl-10">
            <h1 className="text-white text-5xl font-bold mb-6">
              Welcome to Creative Learners' Academy
            </h1>
            <p className="text-white text-xl mb-4">
              Empowering students through innovative education
            </p>
            <button 
              onClick={moveToAboutUs} 
              className="-text--light bg-blue-500 px-6 py-3 font-bold rounded-md hover:bg-blue-700"
            >
              Learn More About Us
            </button>
          </div>
        </div>
        
        {/* Mission & Vision */}
        <div className="px-10 py-20 lg:px-[280px] items-center">
          <h3 className="text-4xl text-center font-bold mb-16 -text--medium">Creative education for practical life</h3>
          <div className="flex gap-2">
            <div 
              ref={missionRef} 
              className={`relative mr-5 py-7 w-full justify-center rounded-md transform transition-transform duration-1000 ${
                missionInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-[250px] h-[250px] rounded-full -bg--custom transform transition-transform duration-1000 ${
                  missionInView ? 'scale-100' : 'scale-0'
                }`}></div>
              </div>
              <h2 className="relative text-3xl leading-10 text-center font-bold mb-3 z-10">
                OUR MISSION
              </h2>
              <div className="mx-auto text-2xl max-w-xl relative z-10">
                To empower students from diverse backgrounds through affordable, quality education, fostering lifelong learning and personal growth.
              </div>
            </div>

            <div 
              ref={visionRef} 
              className={`relative ml-5 py-7 w-full justify-center rounded-md transform transition-transform duration-1000 ${
                visionInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-[250px] h-[250px] rounded-full -bg--custom transform transition-transform duration-1000 ${
                  visionInView ? 'scale-100' : 'scale-0'
                }`}></div>
              </div>
              <h2 className="relative text-3xl leading-10 text-center font-bold mb-3 z-10">
                OUR VISION
              </h2>
              <div className="mx-auto text-2xl max-w-xl relative z-10">
                Empowering future leaders through innovative education, fostering creativity, critical thinking, and global citizenship.
              </div>
            </div>
          </div>
        </div>

        {/* Event Calendar */}
        <motion.div 
          ref={calendarRef}
          initial={{ opacity: 0, y: 20 }}
          animate={calendarInView ? { opacity: 1, y: 0, transition: { duration: 1 } } : { opacity: 0, y: 20 }}
          className="px-10 py-20 bg-white"
        >
          <h3 className="text-4xl text-center font-bold mb-16 -text--medium animate__animated animate__fadeInUp">Event Calendar</h3>
          <NepaliCalendar />
        </motion.div>

        {/* Notice */}
        <motion.div 
          ref={noticeRef}
          initial={{ opacity: 0, y: 20 }}
          animate={noticeInView ? { opacity: 1, y: 0, transition: { duration: 1 } } : { opacity: 0, y: 20 }}
          className="px-10 py-20"
        >
          <h3 className="text-4xl text-center font-bold mb-16 -text--medium animate__animated animate__fadeInUp">Notice</h3>
          <LandingNotice />
        </motion.div>

        {/* Gallery */}
        <motion.div 
          ref={galleryRef}
          initial={{ opacity: 0, y: 20 }}
          animate={galleryInView ? { opacity: 1, y: 0, transition: { duration: 1 } } : { opacity: 0, y: 20 }}
          className="px-10 py-20"
        >
          <h3 className="text-4xl text-center font-bold mb-16 -text--medium animate__animated animate__fadeInUp">Gallery</h3>
          <Gallery />
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
