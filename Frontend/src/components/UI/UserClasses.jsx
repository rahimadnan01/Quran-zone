import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";

export default function ClassesTable() {
  const classes = [];

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-white shadow-md rounded-lg mt-[10%]">
        <h1 className="text-2xl font-bold mb-4">Classes</h1>
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-left text-gray-600">
                Class Name
              </th>
              <th className="border border-gray-200 px-4 py-2 text-left text-gray-600">
                Class Time
              </th>
              <th className="border border-gray-200 px-4 py-2 text-left text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {classes.length > 0 ? (
              classes.map((classItem, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-all">
                  <td className="border border-gray-200 px-4 py-2">
                    {classItem.name}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {classItem.time}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                      Join
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="border border-gray-200 px-4 py-2 text-center text-gray-500"
                >
                  No classes available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
