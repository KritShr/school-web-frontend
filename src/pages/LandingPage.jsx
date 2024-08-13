import Calendar from "../components1/Calendar";
import LandingNotice from "../components1/LandingNotice";
import Gallery from "../components1/Gallery";
import styles from "../css/page/Contact.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const LandingPage = () => {
  // 슬라이드 이미지 추가
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "../public/image-10@2x.png",
    "../public/image-11@2x.png",
    "../public/image-12@2x.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // 5초마다 이미지 전환

    return () => clearInterval(interval);
  }, [slides.length]);
  

  const navigate = useNavigate();

  const moveToAboutUs = () =>{
    navigate('/about-us');
  }

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
              <img 
                key={index}
                src={slide} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-[600px] object-cover"
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col justify-center h-full pl-10">
            <h1 className="text-white text-5xl font-bold mb-6">
              Welcome to Our School
            </h1>
            <p className="text-white text-xl mb-4">
              Empowering students through innovative education
            </p>
            <button 
              onClick={moveToAboutUs} 
              className="text-white bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-700"
            >
              Learn More About Us
            </button>
          </div>
        </div>
        
        {/** mission & vision */}
        <div className="px-10 py-20 items-center">
          <h3 className="text-4xl text-center font-bold mb-16 -text--medium">Creative education for practical life</h3>
          {/** our mission */}
          <div className="flex gap-10">
            <div className="py-7 w-full justify-center rounded-md">
              <h2  className="text-2xl leading-10 text-center font-semibold -text--text-default-default mb-3">OUR MISSION</h2>
              <h3 className="pl-5 pr-5 text-xl">
                To empower students from diverse backgrounds through affordable, quality education, fostering lifelong learning and personal growth.
              </h3>
            </div>

            {/** our vision */}
            <div className="py-7 w-full justify-center rounded-md">
              <h2  className="text-2xl leading-10 text-center font-semibold -text--text-default-default mb-3">OUR VISION</h2>
              <h3 className="pl-5 pr-5 text-xl">
                Empowering future leaders through innovative education, fostering creativity, critical thinking, and global citizenship.
              </h3>
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
