import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import axios from "axios";
function RegisterForm({ role }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(role);
    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1/${role}/register`,
        data,
        { withCredentials: true }
      );
      console.log("form submitted successfully", response.data);
      reset();
    } catch (error) {
      console.log("failed to send data");
    }
  };
  return (
    // parent div
    <div className="w-full h-[80vh] mt-8   flex justify-center items-center">
      {/* form */}
      <div className="w-1/3 h-full bg-white rounded-md mb-5">
        <h1 className="font-poppins font-semibold text-3xl text-slate-900 mt-10 ml-5">
          Please Register
        </h1>
        <div className="w-full h-[70%] ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-[100%]   flex flex-col p-5 items-center gap-5"
          >
            <div className="w-[80%]">
              <label htmlFor="username" className="text-[1rem] font-poppins">
                Username
              </label>
              <input
                id="username"
                className="w-full  h-[3rem] border-2 border-gray-300 outline-gray-400 font-poppins rounded-md focus:outline-2 focus:outline-blue-500 transition duration-300 ease-in-out"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <span className="text-red-600">Username is required</span>
              )}
            </div>
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
                {" "}
                <NavLink to="/login">Do not have an account? Signup</NavLink>
              </li>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
