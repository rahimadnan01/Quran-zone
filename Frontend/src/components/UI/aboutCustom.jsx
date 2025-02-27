import { motion } from "framer-motion";
import { useState } from "react";
import { image7 } from "../../assets";

export default function WelcomeSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-full h-screen  bg-cover bg-center font-poppins  my-10">
      <div className="w-full h-full  flex items-center justify-evenly min-h-screen bg-gray-100 ">
        <div className="w-full h-full bg-white rounded-lg shadow-lg px-6 flex flex-col md:flex-row items-center justify-evenly ">
          <img
            src={image7}
            alt="Quran Book"
            className="rounded-lg w-80 h-auto"
          />
          <div className=" w-[50%] md:ml-8 mt-6 md:mt-0 text-center md:text-left">
            <motion.span
              className=" inline-block px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              ABOUT Quran Zone
            </motion.span>
            <h2 className="text-3xl font-bold mt-3">
              Welcome to The quranZone.com
            </h2>
            <p className="text-gray-600 mt-3">
              Welcome to Quran Zone, the ultimate destination for online Quran
              education. Our courses are tailored to help you perfect your
              recitation and deepen your understanding of the Quran. At Quran
              Zone, we blend tradition with technology, offering a unique
              learning experience that empowers students to excel in their
              Quranic studies.
            </p>
            <motion.button
              className="mt-5 px-6 py-3 text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {hovered
                ? "Enroll Now & Start Your Journey!"
                : "Start Learning Quran Today"}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
