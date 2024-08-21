import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const moveTo = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  return (
    <footer className="-bg--color-darkslategray-100 flex flex-col gap-5 px-10 py-10 sm:px-4 lg:px-40">
      {/** class logo */}
      <div className="flex w-full justify-between">
        <div className="flex w-1/3 lg:w-2/4">
          <div className="-bg--default-white px-5 py-5 text-center">
            <img
              className="size-56 mb-5"
              loading="lazy"
              alt=""
              src="/CLA@logo.png"
            />
            <h3 className="-text--color-darkslategray-100 text-4xl font-semibold">
              Creative <br />
              Learners'<br />
              Academy
            </h3>
          </div>
        </div>
        {/** links */}
        <div className="w-1/3 lg:w-1/3">
          <h2 className="-text--light font-bold text-4xl">Links</h2>
          <div className="py-8">
            <h3
              className="-text--default-white font-medium text-2xl mb-3 cursor-pointer"
              onClick={() => moveTo("/")}
            >
              Home
            </h3>
            <h3
              className="-text--default-white font-medium text-2xl mb-3 cursor-pointer"
              onClick={() => moveTo("/about-us")}
            >
              About Us
            </h3>
            <h3
              className="-text--default-white font-medium text-2xl mb-3 cursor-pointer"
              onClick={() => moveTo("/event")}
            >
              News
            </h3>
            <h3
              className="-text--default-white font-medium text-2xl mb-3 cursor-pointer"
              onClick={() => moveTo("/management")}
            >
              Staff
            </h3>
            <h3
              className="-text--default-white font-medium text-2xl mb-3 cursor-pointer"
              onClick={() => moveTo("/facilities")}
            >
              Facility
            </h3>
            <h3
              className="-text--default-white font-medium text-2xl mb-3 cursor-pointer"
              onClick={() => moveTo("/notice")}
            >
              Notice
            </h3>
            <h3
              className="-text--default-white font-medium text-2xl mb-3 cursor-pointer"
              onClick={() => moveTo("/gallery/school")}
            >
              Gallery
            </h3>
            <h3
              className="-text--default-white font-medium text-2xl mb-3 cursor-pointer"
              onClick={() => moveTo("/contact")}
            >
              Contact
            </h3>
            <h3
              className="-text--default-white font-medium text-2xl mb-3 cursor-pointer"
              onClick={() => moveTo("/payment")}
            >
              Payment
            </h3>
          </div>
        </div>
        <div className="w-1/3 lg:w-1/4">
          <h2 className="-text--light font-bold text-4xl">Find Us</h2>
          <div className="py-8">
            <h3 className="-text--default-white font-medium text-2xl mb-3">
              Madhyapur Thimi 6, Hulakroad
            </h3>
            <h3 className="-text--default-white font-medium text-2xl mb-3">
              +977 9762422532
            </h3>
            <h3 className="-text--default-white font-medium text-2xl">
              claschoolnp@gmail.com
            </h3>
          </div>
        </div>
      </div>
      {/** Copyright */}
      <div className="text-center mt-5">
        <h3 className="-text--default-white font-medium text-xl">
          Copyright ⓒ 2024 K-hana
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
