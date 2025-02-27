import React from "react";
import Navbar from "../components/Layouts/Navbar";
import CoursesSection from "../components/UI/CoursesSection";
import CourseCard from "../components/Layouts/Card";
import Footer from "../components/Layouts/Footer";
const Course = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <CoursesSection />
      <CourseCard />
      <Footer />
    </div>
  );
};

export default Course;
