import { useForm } from "react-hook-form";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";

export default function AccountDetailsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Changes Saved!");
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white p-6 rounded-lg mt-[20%] shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Account Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 border rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <h3 className="text-xl font-semibold mt-4">Password change</h3>
          <input
            type="password"
            placeholder="Current Password"
            {...register("currentPassword", {
              required: "Current password is required",
            })}
            className="w-full p-2 border rounded-md bg-blue-100"
          />
          {errors.currentPassword && (
            <p className="text-red-500 text-sm">
              {errors.currentPassword.message}
            </p>
          )}

          <div className="flex space-x-2">
            <input
              type="password"
              placeholder="New Password"
              {...register("newPassword")}
              className="w-full p-2 border rounded-md"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                validate: (value, { newPassword }) =>
                  value === newPassword || "Passwords do not match",
              })}
              className="w-full p-2 border rounded-md"
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}

          <button
            type="submit"
            className="w-full p-2 mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-md"
          >
            Save Changes
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
