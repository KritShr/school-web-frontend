import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FacilitiesMain from "./pages/FacilitiesMain";
import AboutUs from "./pages/AboutUs";
import Management from "./pages/Management";
import Root from "./pages/Root";
import Notice1 from "./pages/Notice1";
import NoticeDetail from "./pages/NoticeDetail";
import Contact from "./pages/Contact";
import Gallery3A from "./pages/Gallery3A";
import Root1 from "./pages/Root1";
import Root2 from "./pages/Root2";
import Root11 from "./pages/Root11";
import Root3 from "./pages/Root3";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/facilities-main":
        title = "";
        metaDescription = "";
        break;
      case "/about-us-4":
        title = "";
        metaDescription = "";
        break;
      case "/management":
        title = "";
        metaDescription = "";
        break;
      case "/root":
        title = "";
        metaDescription = "";
        break;
      case "/notice":
        title = "";
        metaDescription = "";
        break;
      case "/notice-detail":
        title = "";
        metaDescription = "";
        break;
      case "/contact-4":
        title = "";
        metaDescription = "";
        break;
      case "/gallery-3a":
        title = "";
        metaDescription = "";
        break;
      case "/root1":
        title = "";
        metaDescription = "";
        break;
      case "/root2":
        title = "";
        metaDescription = "";
        break;
      case "/root3":
        title = "";
        metaDescription = "";
        break;
      case "/root4":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/facilities-main" element={<FacilitiesMain />} />
      <Route path="/about-us-4" element={<AboutUs />} />
      <Route path="/management" element={<Management />} />
      <Route path="/root" element={<Root />} />
      <Route path="/notice" element={<Notice1 />} />
      <Route path="/notice-detail" element={<NoticeDetail />} />
      <Route path="/contact-4" element={<Contact />} />
      <Route path="/gallery-3a" element={<Gallery3A />} />
      <Route path="/root1" element={<Root1 />} />
      <Route path="/root2" element={<Root2 />} />
      <Route path="/root3" element={<Root11 />} />
      <Route path="/root4" element={<Root3 />} />
    </Routes>
  );
}
export default App;
