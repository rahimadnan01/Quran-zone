import React, { useState } from "react";
import { authImage, authLogo } from "../../assets";
import RegisterForm from "../forms/RegisterForm";
import ColorToggleButton from "../MaterialUi/Toggle";
function Register() {
  const [role, setRole] = useState();
  return (
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
      <RegisterForm role={role} />
    </div>
  );
}

export default Register;
