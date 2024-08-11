import { useCallback } from "react";
import { useNavigate} from "react-router-dom";
import PropTypes from "prop-types";


const Header = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname
  const moveTo = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  return (
    <div className="flex px-5 py-2 justify-between items-center">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => moveTo('/')}>
        <img
          className="h-20 w-20"
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
        <h2 className="font-bold text-4xl">Creative Learners' Academy</h2>
      </div>

      <div className="flex items-center gap-7">
        <h3 className={`font-medium text-2xl cursor-pointer hover:-text--medium ${currentPath === '/' ? '-text--medium' : ''}`} onClick={() => moveTo('/')}>Home</h3>
        <h3 className={`font-medium text-2xl cursor-pointer hover:-text--medium ${currentPath === '/about-us' ? '-text--medium' : ''}`} onClick={() => moveTo('/about-us')}>About Us</h3>
        <h3 className={`font-medium text-2xl cursor-pointer hover:-text--medium ${currentPath === '/management' ? '-text--medium' : ''}`} onClick={() => moveTo('/management')}>Management</h3>
        <h3 className={`font-medium text-2xl cursor-pointer hover:-text--medium ${currentPath === '/facilities' ? '-text--medium' : ''}`} onClick={() => moveTo('/facilities')}>Facility</h3>
        <h3 className={`font-medium text-2xl cursor-pointer hover:-text--medium ${currentPath === '/notice' ? '-text--medium' : ''}`} onClick={() => moveTo('/notice')}>Notice</h3>
        <h3 className={`font-medium text-2xl cursor-pointer hover:-text--medium ${currentPath === '/gallery' ? '-text--medium' : ''}`} onClick={() => moveTo('/gallery')}>Gallery</h3>
        <h3 className={`font-medium text-2xl cursor-pointer hover:-text--medium ${currentPath === '/contact' ? '-text--medium' : ''}`} onClick={() => moveTo('/contact')}>Contact Us</h3>
        <img
          className="size-auto"
          loading="lazy"
          alt=""
          src="/account.svg"
          onClick={() => moveTo('/login')}
        />
      </div>
    </div>

  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;