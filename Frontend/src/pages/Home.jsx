import React, { useState } from "react";
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
      <HowToApply
        heading={"How To Apply"}
        description={
          "Our platform is not just an ordinary Quran academy—it is a place where you can learn Al Quran online, improve your Quranic Qaida, and even engage with our islami website for further Islamic studies. We offer structured programs in Quran and Tajweed, designed for those looking to strengthen their Quran recitation and deepen their knowledge of the Quranic study."
        }
      />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
