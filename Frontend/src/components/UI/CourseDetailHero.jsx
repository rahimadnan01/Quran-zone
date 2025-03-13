import React from "react";

const CourseDetailHero = ({ course }) => {
  if (!course || !course.thumbnail) {
    return <div className="text-center text-white">Loading...</div>;
  }
  return (
    <div className="relative w-full h-screen  bg-cover bg-center font-poppins mt-[10%]">
      <div className="w-full flex flex-col items-center p-6 bg-gradient-to-b from-blue-400 to-purple-400 text-white">
        {/* Header Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
              Bestseller
            </span>
            <span className="text-lg font-semibold">4.8 ⭐⭐⭐⭐⭐</span>
          </div>
          <h1 className="text-2xl font-bold">Nazra Quran with Tajweed</h1>
          <p className="text-sm opacity-90">
            By Quran Zone Team in Understanding Quran
          </p>
          <div className="text-xs mt-2 opacity-75">
            Last updated 1 month ago • English/Urdu • Certified Course
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-6 relative w-96 h-56 overflow-hidden rounded-xl shadow-lg">
          <img
            src={course.thumbnail}
            alt="Nazra Quran"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl font-bold">NAZRA QUR'AN</h2>
            <p className="text-lg">WITH TAJWEED</p>
            <p className="text-sm mt-1 opacity-80">By Quran zone</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailHero;
