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
import FacilityDetail from "./pages/FacilityDetail";
import Event from "./pages/Event";
import EventDetail from "./pages/EventDetail";


import AboutUs from "./pages/AboutUs";
import Management from "./pages/Management";
import Root from "./pages/Root";
import Notice1 from "./pages/Notice1";
import NoticeDetail from "./pages/NoticeDetail";

import Contact from "./pages/Contact";
import ContactList from "./pages/ContactList";
import ContactListDetail from "./pages/ContactListDetail";
import Payment from "./pages/Payment";

import Gallery3A from "./pages/Gallery3A";
import LoginPage from "./pages/LoginPage";
import Root1 from "./pages/Root1";
import Root2 from "./pages/Root2";
import Root11 from "./pages/Root11";
import Root3 from "./pages/Root3";
import Footer from './layout/Footer'
import Header from './layout/Header'
import LandingSubHeader from './layout/SubHeader/LandingSubHeader'
import OtherSubHeader from './layout/SubHeader/OtherSubHeader'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const routeTitles = {
  '/gallery/:type': { mainTitle: 'Gallery', subTitle: 'Home, Gallery' },
  '/notice': { mainTitle: 'Notice', subTitle: 'Home, Notice' },
  '/notice/:id': { mainTitle: 'Notice', subTitle: 'Home, Notice' },
  '/contact': { mainTitle: 'Contact', subTitle: 'Home, Contact' },
  '/contactList': { mainTitle: 'Contact List', subTitle: 'Home, Contact List' },
  '/contactList/:id': { mainTitle: 'Contact List', subTitle: 'Home, Contact List' },
  '/payment': { mainTitle: 'Payment', subTitle: 'Home, Payment' },
  '/event': { mainTitle: 'News & Events', subTitle: 'Home, News & Events' },
  '/newses/:eventId': { mainTitle: 'News & Events', subTitle: 'Home, News & Events' },


  '/management' : { mainTitle: 'Management', subTitle: 'Home, Management' },
  '/facilities' : { mainTitle: 'Facilities', subTitle: 'Home, Facilities' },
  '/facilities/:id': { mainTitle: 'Facilities', subTitle: 'Home, facilities' },
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
      case "/event":
        title = "";
        metaDescription = "";
        break;
      case "/newses/:eventId":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
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
      case "/login":
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
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<LandingPage />} />
        <Route path="/facilities" element={<FacilitiesMain />} />
        <Route path="/facilities/:facilityId" element={<FacilityDetail />} />
        <Route path="/event" element={<Event />} />
        <Route path="/newses/:eventId" element={<EventDetail />} />
        

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/management" element={<Management />} />
        <Route path="/root" element={<Root />} />
        <Route path="/notice" element={<Notice1 />} />
        <Route path="/notice/:noticeId" element={<NoticeDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactList" element={<ContactList />} />
        <Route path="/contactList/:contactListId" element={<ContactListDetail />} />
        <Route path="/payment" element={<Payment />} />

        <Route path="/gallery/:type" element={<Gallery3A />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/root1" element={<Root1 />} />
        <Route path="/root2" element={<Root2 />} />
        <Route path="/root3" element={<Root11 />} />
        <Route path="/root4" element={<Root3 />} />
      </Route>
      
    </Routes>
  );
}
export default App;