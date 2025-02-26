import { useState } from "react";
import Button from "@mui/material/Button";

export default function MissionSection() {
  const [activeTab, setActiveTab] = useState("history");

  const content = {
    history:
      "Founded with a passion for spreading Quranic knowledge, Quran Zone has grown into a trusted global platform, connecting students with expert instructors. Our journey began with a simple mission: to make Quranic education accessible to every child, fostering a deep and meaningful connection with the Quran.",
    mission:
      "Our mission is to empower the next generation with authentic Quranic knowledge, focusing on precise recitation and understanding. Through innovative online learning, we aim to inspire spiritual growth, nurturing both faith and character in students worldwide.",
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center mb-[2rem]  bg-[#f1f3ff] font-poppins">
      <section className="text-center p-6 max-w-[50%]  mx-auto">
        <Button
          variant="outline"
          className="!mb-4 !text-sm !font-poppins !rounded-sm !bg-[#ebe1fc] !text-[#b266e0]"
        >
          Our Mission
        </Button>
        <h1 className="text-4xl font-bold mb-8 mt-8">QuranZone Overview.</h1>

        <div className="flex justify-center gap-4 mb-12 ">
          <button
            className={`px-4 py-2 ${
              activeTab === "history"
                ? "border-b-2 border-[#2f57ef] text-[#2f57ef]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("history")}
          >
            Our History
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "mission"
                ? "border-b-2 border-[#2f57ef] text-[#2f57ef]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("mission")}
          >
            Mission
          </button>
        </div>

        <p className="text-gray-700">{content[activeTab]}</p>
      </section>
    </div>
  );
}
