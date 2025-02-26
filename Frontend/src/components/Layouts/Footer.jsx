import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { mainLogo } from "../../assets";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 md:px-20 flex flex-col md:flex-row justify-between items-start md:items-center border-t font-poppins">
      <div className="md:w-1/3">
        <img src={mainLogo} alt="Quran Zone" className="h-10 mb-4" />
        <p className="text-gray-600 text-sm mb-4">
          We're always in search for talented and motivated people. Don’t be shy
          introduce yourself!
        </p>
        <div className="flex space-x-4 mb-4">
          <a
            href="#"
            className="relative group w-10 h-10 flex items-center justify-center rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 bg-blue-600 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
            <FaFacebookF className="relative z-10 text-gray-700 group-hover:text-white transition-colors duration-300" />
          </a>
          <a
            href="#"
            className="relative group w-10 h-10 flex items-center justify-center rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 bg-blue-600 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
            <FaInstagram className="relative z-10 text-gray-700 group-hover:text-white transition-colors duration-300" />
          </a>
        </div>
        <button className="px-6 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full shadow-lg flex items-center transition-all duration-300 hover:shadow-xl">
          Contact With Us <span className="ml-2">→</span>
        </button>
      </div>

      <div className="md:w-1/3 w-5 mt-6 md:mt-0">
        <h3 className="font-semibold text-gray-900 mb-3 border-b-2 border-transparent transition-all duration-300 hover:border-blue-600">
          Our Company
        </h3>
        <ul className="text-gray-600 text-sm space-y-2 ">
          <li>
            <a
              href="#"
              className="relative hover:text-blue-600 transition-colors duration-300 after:block after:content-[''] after:h-0.5 after:w-1/2 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Contact us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative hover:text-blue-600 transition-colors duration-300 after:block after:content-[''] after:h-0.5 after:w-1/2 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Become Teacher
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative hover:text-blue-600 transition-colors duration-300 after:block after:content-[''] after:h-0.5 after:w-1/2 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              About Quranic Nexus
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative hover:text-blue-600 transition-colors duration-300 after:block after:content-[''] after:h-0.5 after:w-1/2 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Course
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative hover:text-blue-600 transition-colors duration-300 after:block after:content-[''] after:h-0.5 after:w-1/2 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Have a query for us
            </a>
          </li>
        </ul>
      </div>

      <div className="md:w-1/3 mt-6 md:mt-0">
        <h3 className="font-semibold text-gray-900 mb-3">Get Contact</h3>
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Phone:</span> +92 312 6361186
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">E-mail:</span> QuranZone@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
