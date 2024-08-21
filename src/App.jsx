import { useEffect } from "react";
import {
  Outlet,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUsPage";
import Contact from "./pages/ContactPage";
import ContactList from "./pages/ContactListPage";
import FacilitiesMain from "./pages/FacilityPage";
import Gallery3A from "./pages/GalleryPage";
import Payment from "./pages/PaymentPage";
import News from "./pages/NewsPage";
import Staff from "./pages/StaffPage";
import Notice from "./pages/NoticePage";
import LoginPage from "./pages/LoginPage";

import ContactListDetail from "./pages/DetailPages/ContactListDetail";
import FacilityDetail from "./pages/DetailPages/FacilityDetail";
import NoticeDetail from "./pages/DetailPages/NoticeDetail";
import GalleryDetail from "./pages/DetailPages/GalleryDetail";
import EventDetail from "./pages/DetailPages/EventDetail";
import UploadStaff from "./pages/UploadPages/UploadStaff";
import UploadGallery from "./pages/UploadPages/UploadGallery";
import UploadFacility from "./pages/UploadPages/UploadFacility";
import UploadNews from "./pages/UploadPages/UploadNews";
import UploadNotice from "./pages/UploadPages/UploadNotice";

import Footer from './layout/Footer'
import Header from './layout/Header'
import OtherSubHeader from './layout/OtherSubHeader'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
        <Route path="/event" element={<News />} />
        <Route path="/newses/:newsId" element={<EventDetail />} />
        <Route path="/newses/upload" element={<UploadNews/>} />
        <Route path="/newses/update/:newsId" element={<UploadNews isUpdate={true}/>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/management" element={<Staff />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice/:noticeId" element={<NoticeDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/gallery/:type" element={<Gallery3A />} />
        <Route path="/galleries/:galleryId" element={<GalleryDetail />} />

        <Route path="/login" element={<LoginPage/>} />
        <Route path="/contactList" element={<ContactList />} />
        <Route path="/contactList/:contactListId" element={<ContactListDetail />} />
        <Route path="/management/upload"element={<UploadStaff/>} />
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