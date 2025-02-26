import React from "react";
import Navbar from "../components/Layouts/Navbar";
import HeroSection from "../components/UI/Hero";
import CustomSection from "../components/UI/CustomSection";
import MissionSection from "../components/UI/MissionSection";
import ImageGrid from "../components/UI/ImageSection";
import WhyChooseUs from "../components/UI/ChooseUs";
import HowToApply from "../components/UI/Boxes";
import FAQSection from "../components/UI/FaqSection";
import Footer from "../components/Layouts/Footer";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <HeroSection />
      <CustomSection />
      <MissionSection />
      <ImageGrid />
      <WhyChooseUs />
      <HowToApply />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
