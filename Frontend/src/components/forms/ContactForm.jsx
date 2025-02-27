import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { image8 } from "../../assets";
import axios from "axios";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
    
      const response = await axios.post(
        `http://localhost:3000/api/v1/send-email`,
        data
      );
      console.log("form submitted successfully", response.data);
      if (response.status >= 200 && response.status < 300) {
        alert(`email sent successfully`);
      }
      reset();
    } catch (error) {
      console.log("failed to send data");
    }
  };

  return (
    <div className="relative w-full h-screen  bg-cover bg-center font-poppins ">
      <div className="flex items-center justify-center p-8 bg-gray-100">
        <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
          {/* Left side image */}
          <div className="w-1/2 hidden md:block">
            <img
              src={image8}
              alt="Contact Image"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right side form */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-xl font-bold mb-4 text-center">
              Feel Free to Contact with Us
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Name"
                className="w-full p-2 border rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Message"
                className="w-full p-2 border rounded"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full p-3 text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-md transition-all duration-200 ease-in hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 "
              >
                GET IT NOW ➜
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
