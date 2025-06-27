// === src/App.jsx ===
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

import SignUpForm from './pages/Footor/ListYourProperty/SignUpForm.jsx';
import SignInForm from './pages/Footor/ListYourProperty/SignInForm.jsx';

// import SignUp from './pages/User/SignUp.jsx';

import ListYourProperty from "./pages/Footor/ListYourProperty/ListYourProperty";
// import SuccessPage from './pages/Footor/ListYourProperty/signupsteps/SuccessPage.jsx';

// import Step1BasicInfo from './pages/Footor/ListYourProperty/signupsteps/Step1BasicInfo.jsx';
// import Step2UploadImages from './pages/Footor/ListYourProperty/signupsteps/Step2UploadImages.jsx';
// import Step3PropertyDetails from './pages/Footor/ListYourProperty/signupsteps/Step3PropertyDetails.jsx';
// import SuccessPage from './pages/Footor/ListYourProperty/signupsteps/SuccessPage.jsx';
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword.jsx';
import UserSignIn from './pages/User/Signin.jsx';
import Success from './pages/Footor/ListYourProperty/Success.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavbarLinks />
      <div style={{ paddingTop: '80px' }}>
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
          <Route path="/list-your-property/signin" element={<SignInForm />} />
          <Route path="/list-your-property/signup" element={<SignUpForm />} />
          <Route path="/list-your-property/success" element={<Success />} /> 
          {/* <Route path="/list-your-property/signupsteps/step1" element={<Step1BasicInfo />} />
          <Route path="/list-your-property/signupsteps/step2" element={<Step2UploadImages />} />
          <Route path="/list-your-property/signupsteps/step3" element={<Step3PropertyDetails />} /> */}
          <Route path="/forgot-password/*" element={<ForgotPassword />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/signin" element={<UserSignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
