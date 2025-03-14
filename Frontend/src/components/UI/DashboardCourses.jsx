import React from "react";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";

const DashboardCourses = () => {
  return (
    <div className="min-h-screen w-full flex flex-col mt-[15%] ">
      <Navbar />
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Enrollments</h1>
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-left text-gray-600">
                #ID
              </th>
              <th className="border border-gray-200 px-4 py-2 text-left text-gray-600">
                Class
              </th>
              <th className="border border-gray-200 px-4 py-2 text-left text-gray-600">
                Dues Status
              </th>
              <th className="border border-gray-200 px-4 py-2 text-left text-gray-600">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2].map((id) => (
              <tr key={id} className="hover:bg-gray-50 transition-all">
                <td className="border border-gray-200 px-4 py-2">{id}</td>
                <td className="border border-gray-200 px-4 py-2">
                  Nazra Quran with Tajweed
                </td>
                <td className="border border-gray-200 px-4 py-2">PAID</td>
                <td className="border border-gray-200 px-4 py-2">
                  <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                    Pending
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardCourses;
