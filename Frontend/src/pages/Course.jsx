import React, { useEffect } from "react";
import Navbar from "../components/Layouts/Navbar";
import CoursesSection from "../components/UI/CoursesSection";
import CourseCard from "../components/Layouts/Card";
import Footer from "../components/Layouts/Footer";
import useFetch from "../hooks/useFetch";
const Course = () => {
  let { data } = useFetch("http://localhost:3000/api/v1/courses", "GET");
  console.log(data);
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <CoursesSection />
      <CourseCard data={data || []} />
      <Footer />
    </div>
  );
};

export default Course;
