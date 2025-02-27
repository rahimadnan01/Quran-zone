export default function CoursesSection() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between lg:px-0  md:px-16 font-poppins">
      <section className="bg-gradient-to-b from-white to-purple-400 py-16  w-full">
        <div className="max-w-4xl mx-auto text-center w-full">
          <nav className="text-sm text-gray-600 mb-4">
            <span className="text-gray-400">Home &gt;</span> All Courses
          </nav>
          <h1 className="text-3xl font-bold text-gray-900">All Courses</h1>
          <div className="flex justify-center items-center gap-2 mt-3">
            <span className="px-4 py-1 bg-white text-purple-700 font-medium border border-purple-300 rounded-full shadow-sm">
              🌟 1 Courses
            </span>
          </div>
          <p className="text-gray-700 mt-4">
            Transform your life through the timeless wisdom of the Quran—enroll
            in our courses and deepen your connection with faith.
          </p>
          <p className="text-gray-600 mt-2">Showing 1 results</p>
        </div>
      </section>
    </div>
  );
}
