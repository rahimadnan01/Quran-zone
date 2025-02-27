import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="relative w-full h-screen  bg-cover bg-center font-poppins mt-[10%]">
      <div className="bg-gradient-to-b from-purple-100 to-white py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold text-purple-600 bg-purple-200 px-4 py-2 inline-block rounded-full"
        >
          CONTACT US
        </motion.div>

        <h2 className="text-3xl font-bold mt-4 text-gray-800">
          Quran Zone Institute is built together
          <br /> can join with us.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-8 md:px-32">
          {/* Contact Number Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg p-6 rounded-2xl text-center"
          >
            <FaPhoneAlt className="text-blue-500 text-3xl mx-auto" />
            <h3 className="font-bold mt-3">Contact Phone Number</h3>
            <p className="text-gray-600 mt-1">+92 312 6361186</p>
          </motion.div>

          {/* Email Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg p-6 rounded-2xl text-center"
          >
            <FaEnvelope className="text-blue-500 text-3xl mx-auto" />
            <h3 className="font-bold mt-3">Our Email Address</h3>
            <p className="text-gray-600 mt-1">quranzone@gmail.com</p>
          </motion.div>

          {/* Location Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg p-6 rounded-2xl text-center"
          >
            <FaMapMarkerAlt className="text-blue-500 text-3xl mx-auto" />
            <h3 className="font-bold mt-3">Our Location</h3>
            <p className="text-gray-600 mt-1">Bahawalpur Punjab province</p>
            <p className="text-gray-600">63100 Punjab Pakistan</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
