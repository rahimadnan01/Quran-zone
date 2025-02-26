import { image5, schoolPng } from "../../assets";

export default function WhyChooseUs() {
  return (
    <div className="relative w-full h-screen  bg-cover bg-center font-poppins mb-[3rem]">
      <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto p-6 gap-8">
        {/* Left Image */}
        <div className="w-full md:w-1/2 object-cover object-center">
          <img
            src={image5}
            alt="Learning Dashboard"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <img src={schoolPng} alt="Icon" className="w-12 mb-2" />
          <h2 className="text-3xl font-bold mb-4">Why Choose US</h2>
          <p className="text-gray-700 mb-4">
            At Quran Zone , we blend tradition with technology, offering a
            personalized and impactful Quranic education that fosters spiritual
            growth and mastery of recitation.
          </p>
          <ul className="space-y-5 text-gray-700">
            <li>
              <strong>Expert Instructors:</strong> Learn from qualified scholars
              with extensive experience in teaching Tajweed.
            </li>
            <li>
              <strong>Live Face-to-Face Classes:</strong> Engage in real-time
              with instructors through interactive, live online sessions.
            </li>
            <li>
              <strong>Flexible Learning:</strong> Study at your own pace, on
              your own schedule, from anywhere in the world.
            </li>
            <li>
              <strong>Interactive Platform:</strong> Benefit from dynamic
              lessons, quizzes, and practice sessions for effective learning.
            </li>
            <li>
              <strong>Global Community:</strong> Join a supportive network of
              students and instructors worldwide.
            </li>
          </ul>
          <div className="mt-8 flex justify-start">
            <div className="relative group">
              {/* Background Shape */}
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out w-12 h-12 bg-blue-600 rounded-full group-hover:w-60 group-hover:h-12 group-hover:rounded-md"></div>

              {/* Button Text */}
              <span className="relative text-[1.2rem] z-9 text-black  px-4 py-2 mt-5 hover:text-white transition duration-150 ease-in">
                Schedule A Tour <i class="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
