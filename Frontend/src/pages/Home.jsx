import React from "react";
import Navbar from "../components/Layouts/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen w-full ">
      <Navbar />
      <div className="h-screen w-full bg-red-300"></div>
      <div className="h-screen w-full bg-green-300"></div>
      <div className="h-screen w-full bg-blue-300"></div>
    </div>
  );
};

export default Home;
