import React from "react";
import { NavLink } from "react-router-dom";

const CustomSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 font-poppins">
      {/* Left Side: Heading */}
      <div className="md:w-[30%]  text-left">
        <h2 className="text-4xl font-bold text-gray-900">
          Empowering the Next Generation with Authentic Quranic Education.
        </h2>
      </div>

      {/* Right Side: Paragraph & Expanding Background Button */}
      <div className="md:w-1/2 text-left">
        <p className="text-lg text-gray-700 max-w-md">
          At Quran Zone, we believe every child deserves the opportunity to
          learn the Quran with precision and understanding. Our online platform
          is house of quran designed to make Quranic education accessible,
          engaging, and effective for students of all ages, no matter where they
          are in the world.
        </p>

        {/* Expanding Background Button */}
        <div className="mt-6 flex justify-start">
          <div className="relative group">
            {/* Background Shape */}
            <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out w-12 h-12 bg-blue-600 rounded-full group-hover:w-60 group-hover:h-12 group-hover:rounded-md"></div>

            {/* Button Text */}
            <NavLink to={"/aboutUs"}>
              <span className="relative text-[1.2rem] z-9 text-black  px-4 py-2 mt-5 hover:text-white transition duration-150 ease-in">
                A Bit About Us <i class="fa-solid fa-arrow-right"></i>
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSection;
