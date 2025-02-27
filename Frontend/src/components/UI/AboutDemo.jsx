import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { image2 } from "../../assets";

const DemoSection = () => {
  return (
    <div className="relative w-full h-screen  bg-cover bg-center font-poppins ">
      <div className="relative w-full flex justify-center items-center ">
        {/* Background Image */}
        <div className="relative w-full max-w-5xl ">
          <img
            src={image2} // Replace with actual image URL
            alt="Demo Video"
            className="w-full rounded-lg shadow-lg "
          />

          {/* Overlay Text */}
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-4 text-center">
            <p className="text-white text-lg font-semibold">
              To take demo classes, contact us on WhatsApp
            </p>
          </div>

          {/* WhatsApp Button with Animation */}
          <motion.a
            href="https://wa.me/+923126361186" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex justify-center items-center"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center gap-2">
              <FaWhatsapp size={24} />
              <span className="font-semibold">Chat on WhatsApp</span>
            </div>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;
