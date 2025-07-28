// === src/App.jsx ===
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavbarLinks from './components/Navbar/NavLinks.jsx';
import ScrollToTop from "./components/ScrollToTop";

// Main pages
import Home from './pages/Home';
import Hotels from './pages/Ourservices/Hotels.jsx';
import ServiceApartments from './pages/Ourservices/ServiceApartments';
import GuestHouses from './pages/Ourservices/GuestHouses';
import BanquetHalls from './pages/Ourservices/BanquetHalls';
import AboutUS from './pages/AboutUs.jsx';


import AboutEasyStay from './pages/Footor/AboutEasyStay.jsx';
import Careers from './pages/Footor/Careers.jsx';
import Press from './pages/Footor/press.jsx';
import Blog from './pages/Footor/Blog.jsx';

import HelpCenter from './pages/Footor/HelpCenter.jsx';
import FAQs from './pages/Footor/FAQs.jsx';
import ContactUs from './pages/Footor/contactus.jsx';
import CancellationPolicy from './pages/Footor/cancellationpolicy.jsx';

import PrivacyPolicy from './pages/Footor/privacypolicy.jsx';
import TermsOfService from './pages/Footor/termsofservice.jsx';
import Security from './pages/Footor/security.jsx';



import AndroidApp from './pages/Footor/AndroidApp.jsx';
import IOSApp from './pages/Footor/IOSApp.jsx';

// import SignUpForm from './pages/Footor/ListYourProperty/SignUpForm.jsx';
import SignInForm from "./pages/Footor/ListYourProperty/SignInForm.jsx";

// import SignUp from './pages/User/SignUp.jsx';

import ListYourProperty from "./pages/Footor/ListYourProperty/ListYourProperty";
import MultiStepForm from "./pages/Footor/ListYourProperty/SignUpSteps/MultiStepForm.jsx";
import Success from "./pages/Footor/ListYourProperty/SignUpSteps/Success.jsx";
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword.jsx';
import UserSignIn from './pages/User/Signin.jsx';
import SignUp from "./pages/User/SignUp.jsx";
import SignUpSuccess from "./pages/User/SignUpSuccess.jsx";

// Owner workspace imports
import DashboardLayout from "./pages/ownerWorkspace/DashboardLayout";
import DashboardHome from "./pages/ownerWorkspace/DashboardHome";
import AddProperty from "./pages/ownerWorkspace/AddProperty";
import MyProperties from "./pages/ownerWorkspace/MyProperties";
import Bookings from "./pages/ownerWorkspace/Bookings";
import Earnings from "./pages/ownerWorkspace/Earnings";
import Settings from "./pages/ownerWorkspace/Settings";

// Owner-specific imports
import OwnerLayout from "./components/owner/OwnerLayout";
// import BookingsPage from "./pages/BookingsPage"
import contactUs from './pages/Footor/contactus.jsx';
import AddPropertyRoutes from "./routes/AddPropertyRoutes";
//import PropertyListPage from "./pages/PropertyListPage";
import BookingPage from "./pages/Ourservices/BookingPage";

function AppContent() {
  const location = useLocation();
  const isOwnerRoute = location.pathname.startsWith("/owner");

  return (
    <>
      {!isOwnerRoute && <NavbarLinks />}
      <div style={{ paddingTop: !isOwnerRoute ? '80px' : 0 }}>
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/service-apartments" element={<ServiceApartments />} />
          <Route path="/guest-houses" element={<GuestHouses />} />
          <Route path="/banquet-halls" element={<BanquetHalls />} />
          <Route path="/AboutUs" element={<AboutUS />} />

          {/* Footer-related routes */}
          {/* Company */}
          <Route path="/about-easystay" element={<AboutEasyStay />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/blog" element={<Blog />} />

          {/* Support */}
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />

          {/* Legal */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/security" element={<Security />} />

          {/* App download */}
          <Route path="/android-app" element={<AndroidApp />} />
          <Route path="/ios-app" element={<IOSApp />} /> 

          {/* List Your Property routes */}
          <Route path="/list-your-property" element={<ListYourProperty />} />
          <Route path="/list-your-property/signup" element={<MultiStepForm />} />
          <Route path="/list-your-property/signin" element={<SignInForm />} />
          <Route path="/list-your-property/signup-success" element={<Success />} /> 
          <Route path="/forgot-password/*" element={<ForgotPassword />} />
          <Route path="/signin" element={<UserSignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup-success" element={<SignUpSuccess />} />

          {/* Owner routes */}
          <Route path="/owner/login" element={<SignInForm />} />

          <Route path="/owner" element={<DashboardLayout />}>
            <Route path="dashboard" element={<DashboardHome />} />
            <Route path="add-property" element={<AddProperty />} />
            <Route path="my-properties" element={<MyProperties />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="earnings" element={<Earnings />} />
            <Route path="settings" element={<Settings />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Route>

          {/* New Owner-specific routes */}
          <Route
            path="/owner/bookings"
            element={
              <OwnerLayout>
                <Bookings />
              </OwnerLayout>
            }
          />

          <Route
            path="/owner/contact-us"
            element={
              <OwnerLayout>
                <ContactUs />
              </OwnerLayout>
            }
          />

          <Route path="/owner/add-property/*" element={<AddPropertyRoutes />} />
          <Route path="/book/:id" element={<BookingPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
      
    </Router>
  );
}

export default App;
