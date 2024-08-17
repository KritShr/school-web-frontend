import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';  // Import hook
import styles from "../css/page/Contact.module.css";
import NepaliCalendar from '../components1/NepaliCalendar';
import LandingNotice from "../components1/LandingNotice";
import Gallery from "../components1/Gallery";

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "../public/image-10@2x.png",
    "../public/image-11@2x.png",
    "../public/image-12@2x.png"
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

  // Define the refs for interaction
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

  return (
    <div className="sm:px-0 lg:px-0">
      <div className={styles.contact4}>
        {/** intro */}
        <div className="relative w-full h-[600px] overflow-hidden">
          <div 
            className="absolute inset-0 z-0 flex flex-col transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateY(-${currentSlide * 100}%)`
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-[600px]">
                <img 
                  key={index}
                  src={slide} 
                  alt={`Slide ${index + 1}`} 
                  className="w-full h-[600px] object-cover"
                />
                <div 
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))"
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
        
        {/** mission & vision */}
        <div className="px-10 py-20 items-center">
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

        {/** event calendar */}
        <div 
          ref={calendarRef} 
          className={`px-10 py-20 bg-white transform transition-opacity duration-1000 ${
            calendarInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-4xl text-center font-bold mb-16 -text--medium">Event Calendar</h3>
          <NepaliCalendar />
        </div>

        {/** notice */}
        <div 
          ref={noticeRef} 
          className={`px-10 py-20 transform transition-opacity duration-1000 ${
            noticeInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-4xl text-center font-bold mb-16 -text--medium">Notice</h3>
          <LandingNotice />
        </div>

        {/** gallery */}
        <div 
          ref={galleryRef} 
          className={`px-10 py-20 transform transition-opacity duration-1000 ${
            galleryInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-4xl text-center font-bold mb-16 -text--medium">Gallery</h3>
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
