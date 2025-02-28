import { NavLink } from "react-router-dom";
import { hero } from "../../assets/index.js";
export default function HeroSection() {
  return (
    <div
      className="relative w-full h-screen  bg-cover bg-center font-poppins"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center text-white px-4 h-full mt-10">
        <h2 className=" text-center w-[60%] text-4xl md:text-6xl font-bold">
          Master the Art of Quranic Recitation with Tajweed
        </h2>
        <p className="text-lg font-semibold text-slate-800 md:text-xl mt-8 mb-8 max-w-2xl">
          Empowering the next generation of Quran readers with expert guidance
          and personalized learning.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <NavLink to={"/courses"}>
            <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg shadow-white transition duration-300 hover:bg-blue-600 hover:text-white hover:shadow-xl">
              View Our Program
            </button>
          </NavLink>
          <NavLink to={"/contact"}>
            <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white">
              Contact Us
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
