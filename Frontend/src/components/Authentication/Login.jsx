import React, { useState } from "react";
import LoginForm from "../forms/LoginForm.jsx";
import { authImage, authLogo } from "../../assets/index.js";
import ColorToggleButton from "../MaterialUi/Toggle.jsx";

const Login = () => {
  const [role, setRole] = useState("student");
  return (
    <div>
      <div
        className="min-h-screen w-full  bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${authImage})` }}
      >
        <div className="flex items-center justify-center pt-[3rem] ">
          <div className="w-52 h-52 rounded-full border-8 border-gray-500 overflow-hidden">
            <img
              src={authLogo}
              alt="logo"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-5">
          <ColorToggleButton setRole={setRole} />
        </div>
        <LoginForm role={role} />
      </div>
    </div>
  );
};

export default Login;
