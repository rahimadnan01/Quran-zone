import React, { useState } from "react";
import { motion } from "framer-motion";
const CourseDetailPage = ({ course }) => {
  const [showMore, setShowMore] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  if (!course || !course.thumbnail) {
    return <div className="text-center text-white">Loading...</div>;
  }
  console.log(course);

  return (
    <div className="flex flex-col md:flex-row p-6 font-poppins mb-10">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/3 p-6 border rounded-xl shadow-lg bg-white">
        <h2 className="text-2xl font-bold text-gray-900">
          $40 <span className="line-through text-gray-500">$55</span>
        </h2>
        <p className="text-red-500 text-sm">🔥 3 days left</p>
        <button className="w-full bg-purple-600 text-white font-bold py-3 my-2 rounded-lg">
          Enroll Now →
        </button>
        <button className="w-full bg-gray-200 text-black font-medium py-3 rounded-lg">
          Preview this course
        </button>

        <div className="mt-4 space-y-2 text-gray-700 text-sm">
          <p>
            <strong>Start Date:</strong> {course.startDate} (Admission Open)
          </p>
          <p>
            <strong>Enrolled:</strong> {course.Enrolled}
          </p>
          <p>
            <strong>Duration:</strong> {course.months}
          </p>
          <p>
            <strong>Months:</strong> months
          </p>
          <p>
            <strong>Language:</strong> {course.language}
          </p>
        </div>

        <div className="mt-6">
          <p className="text-sm">For details about the course:</p>
          <p className="font-semibold">📞 Call Us: +92 312 6361186</p>
          <button className="w-full bg-green-500 text-white py-3 rounded-lg mt-2">
            Contact on WhatsApp
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-2/3 p-6">
        {/* Tabs */}
        <div className="flex border-b mb-4">
          <button
            className={`px-4 py-2 font-semibold ${
              activeTab === "overview"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`px-4 py-2 font-semibold ${
              activeTab === "instructor"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("instructor")}
          >
            Instructor
          </button>
        </div>

        {activeTab === "overview" && (
          <div>
            <h3 className="text-xl font-bold mb-2">What you'll learn</h3>
            <p className="text-gray-700">
              <strong>"Nazra"</strong> is a fundamental Islamic education course
              designed to teach students how to read the Quran with proper
              pronunciation and articulation. It focuses on the recitation of
              the Arabic text of the Quran without delving deeply into its
              meanings or interpretations. Read Al-Quran courses typically cater
              to beginners and individuals who wish to establish a strong
              foundation in Quranic reading. “Embark on a profound journey
              through the Quran’s teachings with our comprehensive Quran Online
              with Tajweed (Basic Certificate Course), meticulously developed by
              the esteemed Character Education Foundation. Dive deep into the
              intricacies of Islam’s holiest scripture, enriching your
              understanding and spiritual connection through our user-friendly
              platform. With a focus on character development and moral values,
              our course offers a transformative experience, guiding you towards
              personal growth and enlightenment. Join us as we explore the
              timeless wisdom encapsulated within the Quran’s verses, fostering
              a deeper appreciation for its significance in your life’s
              journey.” “In a Quran Online with Tajweed (Basic Certificate
              Course), students acquaint themselves with the Arabic alphabet.
              They learn to recognize and pronounce individual letters and their
              combinations. Additionally, they acquire basic Tajweed rules,
              which emphasize correct pronunciation, intonation, and rhythm when
              reciting the Quran. This ensures that the divine text is recited
              in the manner it was revealed to Prophet Muhammad (peace be upon
              him).” Throughout the course, students practice reading selected
              verses and passages from the Quran, gradually progressing in their
              proficiency and fluency. The goal is to enable students to recite
              the Quran accurately and confidently, whether in personal worship
              or communal settings.
              {showMore && (
                <>
                  Read Al-Quran courses typically cater to beginners and
                  individuals who wish to establish a strong foundation in
                  Quranic reading.
                  <br />
                  "Embark on a profound journey through the Quran’s teachings
                  with our comprehensive Quran Online with Tajweed (Basic
                  Certificate Course). "
                  <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg font-poppins">
                    <motion.h2
                      className="text-2xl font-bold mb-4 text-gray-900"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      Course Objective:
                    </motion.h2>

                    <motion.p
                      className="text-gray-700 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      The Read Al-Quran Basic Course aims to provide students
                      with foundational knowledge and skills necessary for
                      reading and understanding the Quran with proficiency and
                      accuracy.
                    </motion.p>

                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      {[
                        "Recite Quranic verses fluently and accurately, paying attention to proper pronunciation and Tajweed rules.",
                        "Recognize and differentiate between Arabic letters and sounds, enabling them to read Quranic text independently.",
                        "Understand the basic meanings and themes of selected Quranic verses and passages.",
                        "Apply fundamental Tajweed rules to improve their recitation and enhance their connection with the Quran.",
                        "Develop confidence in reading and reciting Quranic text in both individual and congregational settings.",
                        "Cultivate a deeper appreciation for the linguistic beauty and spiritual significance of the Quran.",
                        "Lay a strong foundation for further Quranic studies and exploration of Islamic knowledge.",
                      ].map((point, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                          {point}
                        </motion.li>
                      ))}
                    </ul>

                    <motion.p
                      className="text-gray-700 mt-4 italic"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      “This course combines structured lessons, practice
                      sessions, and feedback. It aims to empower students to
                      engage with the Quran. The goal is to instill reverence,
                      accuracy, and comprehension.”
                    </motion.p>

                    <motion.button
                      className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Join Now
                    </motion.button>
                  </div>
                </>
              )}
            </p>
            <button
              className="text-blue-500 text-sm mt-2"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

        {activeTab === "instructor" && (
          <div className="mt-4 p-4 border rounded-lg shadow-md bg-white">
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Instructor"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">Team QuranZone.com</h3>
                <p className="text-gray-600 text-sm">Advanced Educator</p>
                <p className="text-sm text-yellow-500">
                  ⭐⭐⭐⭐⭐ 4.8 Rating | 500+ Students
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-3">
              Quran Zone Institute consists of expert and dedicated
              individuals that will provide Quranic education for you.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetailPage;
