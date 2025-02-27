"use client";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const ChangingTextSection = () => {
  return (
    <div className="relative w-full h-screen  bg-cover bg-center font-poppins mt-[10%]">
      <section className=" w-full flex flex-col items-center justify-center text-center py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white shadow-lg rounded-full px-4 py-2 text-sm font-medium text-gray-700 mb-4"
        >
          🌟 Your Premier Destination for Online Quranic Education
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-gray-900"
        >
          Read About Our{" "}
          <span className="text-purple-600">
            <Typewriter
              words={["Planning.", "Mission.", "Vision."]}
              loop={0} // Infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1200}
            />
          </span>
        </motion.h2>

        <p className="text-gray-600 mt-4 max-w-xl">
          Immerse yourself in the beauty of Quranic recitation! Perfect your
          Tajweed, learn Nazrah, and gain spiritual insight with personalized
          lessons from our skilled educators.
        </p>

        <div className="mt-6 flex gap-4">
          <NavLink to={"/login"}>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg font-medium hover:bg-white hover:text-blue-600 transition duration-150 ease-in">
              Log in to Start →
            </button>
          </NavLink>
          <button className="border border-gray-300 px-6 py-3 rounded-lg shadow-lg font-medium hover:bg-slate-900 hover:text-white transition duration-150 ease-in">
            Contact US →
          </button>
        </div>
      </section>
    </div>
  );
};

export default ChangingTextSection;
