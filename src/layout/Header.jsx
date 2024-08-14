import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Header = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const moveTo = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="!bg-white shadow-md">
      <div className="!bg-white flex justify-between items-center px-5 py-4">
        {/* Logo Section */}
        <div
          className="!bg-white flex items-center gap-3 cursor-pointer"
          onClick={() => moveTo('/')}
        >
          <img
            className="h-16 w-16"
            loading="lazy"
            alt="Logo"
            src="/image-3@2x.png"
          />
          <h2 className="!bg-white whitespace-nowrap font-bold text-2xl lg:text-4xl text-gray-800">
            Creative Learners' Academy
          </h2>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="bg-white wide:hidden">
          <button
            className="!bg-white text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="!bg-white w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Menu Items */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } !bg-white wide:!bg-white wide:flex wide:items-center wide:gap-7 absolute wide:relative top-16 
            wide:top-auto right-5 wide:right-auto  
            shadow-lg wide:shadow-none p-5 wide:p-0 rounded-lg z-50
          `}
          
          style={{
            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))"
          }}
          >
          
          <h3
            className={`mb-1 font-semibold text-2xl cursor-pointer hover:-text--medium ${
              currentPath === '/' ? 'text-gray-600' : ''
            }`}
            onClick={() => moveTo('/')}
          >
            Home
          </h3>
          <h3
            className={`mb-1 whitespace-nowrap font-semibold text-2xl cursor-pointer hover:-text--medium ${
              currentPath === '/about-us' ? 'text-gray-600' : ''
            }`}
            onClick={() => moveTo('/about-us')}
          >
            About Us
          </h3>
          <h3
            className={`mb-1 whitespace-nowrap font-semibold text-2xl cursor-pointer hover:-text--medium ${
              currentPath === '/event' ? 'text-gray-600' : ''
            }`}
            onClick={() => moveTo('/event')}
          >
            News & Events
          </h3>
          <h3
            className={`mb-1 font-semibold text-2xl cursor-pointer hover:-text--medium ${
              currentPath === '/management' ? 'text-gray-600' : ''
            }`}
            onClick={() => moveTo('/management')}
          >
            Management
          </h3>
          <h3
            className={`mb-1 font-semibold text-2xl cursor-pointer hover:-text--medium ${
              currentPath === '/facilities' ? 'text-gray-600' : ''
            }`}
            onClick={() => moveTo('/facilities')}
          >
            Facility
          </h3>
          <h3
            className={`mb-1 font-semibold text-2xl cursor-pointer hover:-text--medium ${
              currentPath === '/notice' ? 'text-gray-600' : ''
            }`}
            onClick={() => moveTo('/notice')}
          >
            Notice
          </h3>
          <h3
            className={`mb-1 font-semibold text-2xl cursor-pointer hover:-text--medium ${
              currentPath === '/gallery' ? 'text-gray-600' : ''
            }`}
            onClick={() => moveTo('/gallery')}
          >
            Gallery
          </h3>
          <h3
            className={`mb-1 whitespace-nowrap font-semibold text-2xl cursor-pointer hover:-text--medium ${
              currentPath === '/contact' ? 'text-gray-600' : ''
            }`}
            onClick={() => moveTo('/contact')}
          >
            Contact Us
          </h3>
          <h3
            className={`mb-1 font-semibold text-2xl cursor-pointer hover:-text--medium ${
              currentPath === '/payment' ? 'text-gray-600' : ''
            }`}
            onClick={() => moveTo('/payment')}
          >
            Payment
          </h3>
          <img
            className="h-8 w-8 cursor-pointer"
            loading="lazy"
            alt="Account"
            src="/account.svg"
            onClick={() => moveTo('/login')}
          />
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
