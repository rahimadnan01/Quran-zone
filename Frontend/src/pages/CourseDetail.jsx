import React, { useState } from "react";
import CourseDetailHero from "../components/UI/CourseDetailHero.jsx";
import Navbar from "../components/Layouts/Navbar.jsx";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import CourseDetailPage from "../components/UI/CourseDetailPage.jsx";
import Footer from "../components/Layouts/Footer.jsx";

const CourseDetail = () => {
  const { courseId } = useParams();
  console.log(courseId);
  const { data, loading } = useFetch(
    `https://quran-zone.onrender.com/api/v1/courses/${courseId}`,
    "GET"
  );

  

  if (loading || !data) {
    return <div className="text-center text-white">Loading...</div>;
  }
  return (
    <div>
      <Navbar />
      <CourseDetailHero course={data || ""} />
      <CourseDetailPage course={data || ""} courseId={courseId} />
      <Footer />
    </div>
  );
};

export default CourseDetail;
