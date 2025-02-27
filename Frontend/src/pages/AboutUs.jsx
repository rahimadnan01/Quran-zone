import React from "react";
import Navbar from "../components/Layouts/Navbar";
import ChangingTextSection from "../components/UI/aboutHero";
import DemoSection from "../components/UI/AboutDemo";
import WelcomeSection from "../components/UI/aboutCustom";
import HowToApply from "../components/UI/Boxes";
import Footer from "../components/Layouts/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <ChangingTextSection />
      <DemoSection />
      <WelcomeSection />
      <HowToApply
        heading={"Why Learn With Our Courses"}
        description={
          "Through our dedicated online classes, we connect students to highly skilled Quran teachers, including access to online Arabic tutors who specialize in Quranic Arabic. With these resources, students of all levels, from beginners to advanced learners, can engage in the Quran study and recitation process with ease. Our platform also caters to students who wish to improve their understanding of the Quran Pak through comprehensive courses that involve both Quran and Tajweed."
        }
      />
      <Footer />
    </div>
  );
};

export default AboutUs;
