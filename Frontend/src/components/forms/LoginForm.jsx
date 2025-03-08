import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import axios from "axios";

const LoginForm = ({ role }) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log(role);
      const response = await axios.post(
        `http://localhost:3000/api/v1/${role}/login`,
        data,
        { withCredentials: true }
      );
      login(response.data.data.loggedInUser);
      console.log(
        "form submitted successfully",
        response.data.data.loggedInUser
      );
      if (response.status >= 200 && response.status < 300) {
        alert(`${role} logged in successfully`);
        navigate("/");
      }
      reset();
    } catch (error) {
      console.log("failed to send data");
    }
  };
  return (
    <div className="w-full h-[80vh] mt-8   flex justify-center items-center">
      {/* form */}
      <div className="w-1/3 h-full bg-white rounded-md mb-5">
        <h1 className="font-poppins font-semibold text-3xl text-slate-900 mt-10 ml-5">
          Please Login
        </h1>
        <div className="w-full h-[70%] mt-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-[100%]   flex flex-col p-5 items-center gap-8"
          >
            <div className="w-[80%]">
              <label htmlFor="email" className="text-[1rem] font-poppins">
                Email
              </label>
              <input
                id="email"
                className="w-full  h-[3rem] border-2 border-gray-300 outline-gray-400 font-poppins rounded-md focus:outline-2 focus:outline-blue-500 transition duration-200"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="w-[80%]">
              <label htmlFor="password" className="text-[1rem] font-poppins">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full  h-[3rem] border-2 border-gray-300 outline-gray-400 font-poppins rounded-md focus:outline-2 focus:outline-blue-500 transition duration-200"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password field is required",
                  },
                  minLength: {
                    value: 8,
                    message: "Password must be 8 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
            </div>
            <div>
              <input
                type="submit"
                disabled={isSubmitting}
                value={isSubmitting ? "Submitting..." : "Submit"}
                className="bg-blue-700 px-[2rem] py-[0.7rem]  rounded-md font-poppins text-white hover:text-blue-700 hover:bg-white hover:cursor-pointer transition duration-300  ease-in-out"
              />
            </div>
            <div>
              <li className="text-slate-500 underline hover:text-slate-800 transition duration-100 hover:cursor-pointer list-none mb-8">
                <NavLink to="/register">Do not have an account? Signup</NavLink>
              </li>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
