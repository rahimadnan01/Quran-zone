import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import { useAuth } from "../context/Auth";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="min-h-screen w-full flex flex-col my-[15%] mb-10">
      <Navbar />
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-700 mb-4">
          Hello, <span className="font-bold">{user.username}</span>
        </p>
        <h2 className="font-semibold text-lg mb-2">
          Welcome to your personalized dashboard!
        </h2>
        <p className="text-gray-600">
          Easily manage your learning journey by accessing your courses,
          scheduled classes, and personal profile all in one place. Stay on top
          of your progress, track achievements, and dive back into your studies
          whenever you like. Your path to knowledge and spiritual growth is just
          a click away.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
