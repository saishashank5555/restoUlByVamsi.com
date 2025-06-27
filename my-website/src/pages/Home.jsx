// src/pages/Home.jsx
import React, { Suspense } from "react";
import BookingCarousel from "../Sections/Home/BookingCarousel"; 
const HeroSection = React.lazy(() => import("../Sections/Home/HeroSection"));
const HomeSection = React.lazy(() => import("../Sections/Home/HomeSection"));
const PopularDestinations = React.lazy(() => import("../Sections/Home/PopularDestinations"));
const HyderabadHotelsSection = React.lazy(() => import("../Sections/Home/HyderabadHotelsSection"));
const Footer = React.lazy(() => import("../Sections/Home/Footer"));
// const AboutUs = React.lazy(() => import("../Sections/Home/AboutUs"));
import MostBookedSection from "../Sections/Home/MostBookedSection";   

const SectionLoader = ({ children }) => (
  <Suspense fallback={<div style={{ minHeight: 200, textAlign: "center" }}>Loading...</div>}>
    {children}
  </Suspense>
);

const Home = () => (
  <div className="home-section-container">
    <SectionLoader>
      <BookingCarousel />
    </SectionLoader>
    <SectionLoader>
      <HeroSection />
    </SectionLoader>
    <SectionLoader>
      <PopularDestinations />
    </SectionLoader>
    <SectionLoader>
      <HyderabadHotelsSection />
    </SectionLoader>
    
      <MostBookedSection />
    <SectionLoader>
      <HomeSection />
    </SectionLoader>
    {/* <SectionLoader>
      <AboutUs />
    </SectionLoader> */}
    <SectionLoader>
      <Footer />
    </SectionLoader>
  </div>
);

export default Home;
