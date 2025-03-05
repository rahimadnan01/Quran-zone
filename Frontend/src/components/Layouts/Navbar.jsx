import React, { useEffect, useRef } from "react";
import { mainLogo } from "../../assets/index.js";
import { navLinks } from "../index.js";
import { NavLink } from "react-router-dom";
import { navAnimation } from "../animations/animation.js";
import ActionAlerts from "../MaterialUi/Alert.jsx";
import { useAuth } from "../Authentication/Auth.jsx";

const Navbar = () => {
  const { isLogin } = useAuth();
  const navRef = useRef(null);
  useEffect(() => {
    if (!navRef.current) return;
    navAnimation(navRef.current);
  }, []);
  return (
    <div
      ref={navRef}
      className="w-full h-[6rem] bg-white shadow-lg fixed top-0 left-0 transition-all duration-500  z-10"
    >
      <nav className="w-full h-full  px-[3rem] flex justify-between items-center">
        <div className="flex gap-3 items-center w-[30%]">
          <img src={mainLogo} alt="" className="w-12 h-12 rounded-full" />
          <p className="font-poppins font-semibold text-slate-800 text-[1.3rem]">
            Quran Zone
          </p>
        </div>
        <div className="flex list-none w-[30%] mr-3">
          <ul className="w-full flex justify-between">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path}>
                <li className="text-[1.1rem] text-slate-900 font-poppins hover:text-blue-600 transition duration-150 ease-in">
                  {link.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="w-[30%] flex items-center gap-5">
          <a
            href="https://wa.me/+923126361186" // Replace 'your_number' with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="flex font-poppins items-center gap-2 bg-green-500 text-white px-2 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300 "
          >
            <i
              className="fa-brands fa-2x fa-whatsapp"
              style={{ color: "#fafcff" }}
            ></i>
            WhatsApp
          </a>
          {isLogin ? (
            <button>logout</button>
          ) : (
            <NavLink
              to="/login"
              className="px-6 py-2 rounded-lg bg-blue-500 text-white font-medium transition duration-300 hover:bg-white hover:text-blue-500 border border-blue-500"
            >
              Login/Register
            </NavLink>
          )}
        </div>
      </nav>
      <ActionAlerts />
    </div>
  );
};

export default Navbar;
