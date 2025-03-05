import { Heading } from "lucide-react";
import { steps } from "../index.js";
import { NavLink } from "react-router-dom";
export default function HowToApply({ heading, description }) {
  return (
    <div className="relative w-full h-screen  bg-cover bg-center font-poppins mb-36">
      <section className="text-center py-12 px-6 max-w-5xl mx-auto font-poppins">
        <h2 className="text-3xl font-bold mb-8">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-[5rem]">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white shadow-md p-6 rounded-lg text-center relative border border-gray-200"
            >
              <span className="text-4xl block mb-4">{step.icon}</span>
              <h3 className="text-xl font-semibold mb-2 hover:text-[#2f57ef] transition duration-100 ease-in">
                <NavLink to={step.to}>{step.title}</NavLink>
              </h3>
              <p className="text-gray-600 text-lg">{step.description}</p>
              <span className="absolute top-4 right-4 text-gray-200 text-6xl font-bold">
                {step.id}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-lg text-gray-700 max-w-3xl mx-auto">
          {description}
        </p>
      </section>
    </div>
  );
}
