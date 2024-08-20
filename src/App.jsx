import { useEffect } from "react";
import {
  Outlet,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FacilitiesMain from "./pages/FacilitiesMain";
import FacilityDetail from "./pages/Details/FacilityDetail";
import Event from "./pages/Event";
import EventDetail from "./pages/Details/EventDetail";

import AboutUs from "./pages/AboutUs/AboutUs";
import Management from "./pages/Management";

import Notice1 from "./pages/Notice1";
import NoticeDetail from "./pages/Details/NoticeDetail";

import Contact from "./pages/Contact/Contact";
import ContactList from "./pages/Contact/ContactList";
import ContactListDetail from "./pages/Contact/ContactListDetail";
import Payment from "./pages/Payment";

import Gallery3A from "./pages/Gallery3A";
import GalleryDetail from "./pages/Details/GalleryDetail";

import LoginPage from "./pages/LoginPage";
import Footer from './layout/Footer'
import Header from './layout/Header'
import UploadManagement from "./pages/Uploads/UploadManagement";
import OtherSubHeader from './layout/SubHeader/OtherSubHeader'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import UploadGallery from "./pages/Uploads/UploadGallery";
import UploadFacility from "./pages/Uploads/UploadFacility";
import UploadNews from "./pages/Uploads/UploadNews";
import UploadNotice from "./pages/Uploads/UploadNotice";

const routeTitles = {
  '/gallery/:type': { mainTitle: 'Gallery', subTitle: 'Home, Gallery' },
  '/galleries/:galleryId': { mainTitle: 'Gallery', subTitle: 'Home, Gallery' },

  '/notice': { mainTitle: 'Notice', subTitle: 'Home, Notice' },
  '/notice/:id': { mainTitle: 'Notice', subTitle: 'Home, Notice' },
  '/contact': { mainTitle: 'Contact', subTitle: 'Home, Contact' },
  '/contactList': { mainTitle: 'Contact List', subTitle: 'Home, Contact List' },
  '/contactList/:id': { mainTitle: 'Contact List', subTitle: 'Home, Contact List' },
  '/payment': { mainTitle: 'Payment', subTitle: 'Home, Payment' },
  '/event': { mainTitle: 'News', subTitle: 'Home, News' },
  '/newses/:eventId': { mainTitle: 'News', subTitle: 'Home, News' },
  '/newses/upload': { mainTitle: 'News Upload', subTitle: 'Home, News Upload'},
  '/newses/update/:newsId': { mainTitle: 'News Update', subTitle: 'Home, News Update'},
  '/management/upload': { mainTitle: 'Staff Upload', subTitle: 'Home, Staff Upload'},
  '/gallery/upload': { mainTitle: 'Gallery Upload', subTitle: 'Home, Gallery Upload'},
  '/facilities/upload': { mainTitle: 'Facility Upload', subTitle: 'Home, Facility Upload'},
  '/facilities/update/:facilitiesId': { mainTitle: 'Facility Update', subTitle: 'Home, Facility Update'},
  '/notice/upload': { mainTitle: 'Notice Upload', subTitle: 'Home, Notice Upload'},
  '/notice/update/:noticeId': { mainTitle: 'Notice Update', subTitle: 'Home, Notice Update'},

  '/management' : { mainTitle: 'Staff', subTitle: 'Home, Staff' },
  '/facilities' : { mainTitle: 'Facility', subTitle: 'Home, Facility' },
  '/facilities/:id': { mainTitle: 'Facility', subTitle: 'Home, Facility' },
  '/about-us' : { mainTitle: 'About us', subTitle: 'Home, About us' },
  '/login' : { mainTitle: 'Admin Login', subTitle: 'Home, Admin Login' }
}
function matchRoute(pathname) {
  for (let route in routeTitles) {
    if (route.includes(':')) {
      const regex = new RegExp(`^${route.replace(/:\w+/g, '\\w+')}$`);
      if (regex.test(pathname)) {
        return routeTitles[route];
      }
    } else if (route === pathname) {
      return routeTitles[route];
    }
  }
  return {};
}
function Layout(){
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  const { mainTitle, subTitle } = matchRoute(location.pathname) || {};
  return(
    <div>
      <ToastContainer
        position='bottom-right'
        theme='light'
        pauseOnHover
        autoClose={1500}
      />
      <Header />
      {isLandingPage ? (
      <div></div>
      ): (
        <OtherSubHeader mainTitle={mainTitle} subTitle={subTitle} />
      )}

      
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

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
      case "/facilities":
        title = "";
        metaDescription = "";
        break;
      case "/facilities/:facilityId":
        title = "";
        metaDescription = "";
        break;
      case "/facilities/upload":
        title = "";
        metaDescription = "";
        break;
      case "/notice/upload":
        title = "";
        metaDescription = "";
        break;
      case "/event":
        title = "";
        metaDescription = "";
        break;
      case "/newses/:eventId":
        title = "";
        metaDescription = "";
        break;
      case "/newses/upload":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/management/upload":
        title = "";
        metaDescription = "";
        break;
      case "/management":
        title = "";
        metaDescription = "";
        break;
      case "/notice":
        title = "";
        metaDescription = "";
        break;
      case "/notice/:noticeId":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/contactList":
        title = "";
        metaDescription = "";
        break;
      case "/contactList/:contactListId":
        title = "";
        metaDescription = "";
        break; 
      case "/payment":
        title = "";
        metaDescription = "";
        break;
      case "/gallery/:type":
        title = "";
        metaDescription = "";
        break;
      case "/gallery/upload":
        title = "";
        metaDescription = "";
        break;
      case "/login":
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
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<LandingPage />} />
        <Route path="/facilities" element={<FacilitiesMain />} />
        <Route path="/facilities/:facilityId" element={<FacilityDetail />} />
        <Route path="/event" element={<Event />} />
        <Route path="/newses/:newsId" element={<EventDetail />} />
        <Route path="/newses/upload" element={<UploadNews/>} />
        <Route path="/newses/update/:newsId" element={<UploadNews isUpdate={true}/>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/management" element={<Management />} />
        <Route path="/notice" element={<Notice1 />} />
        <Route path="/notice/:noticeId" element={<NoticeDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/gallery/:type" element={<Gallery3A />} />
        <Route path="/galleries/:galleryId" element={<GalleryDetail />} />

        <Route path="/login" element={<LoginPage/>} />

        <Route path="/contactList" element={<ContactList />} />
        <Route path="/contactList/:contactListId" element={<ContactListDetail />} />
        <Route path="/management/upload"element={<UploadManagement/>} />
        <Route path="/gallery/upload" element={<UploadGallery/>} />
        <Route path="/facilities/upload" element={<UploadFacility isUpdate={false}/>} />
        <Route path="/facilities/update/:facilityId" element={<UploadFacility isUpdate={true}/>} />
        <Route path="/notice/upload" element={<UploadNotice isUpdate={false}/>} />
        <Route path="/notice/update/:noticeId" element={<UploadNotice isUpdate={true}/>} />

      </Route>
      
    </Routes>
  );
}
export default App;