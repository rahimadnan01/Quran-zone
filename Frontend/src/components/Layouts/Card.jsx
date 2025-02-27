import { useEffect, useRef } from "react";
import { image6 } from "../../assets";
import {
  courseButton,
  courseButtonReverse,
  courseCardAnimation,
} from "../animations/animation";
export default function CourseCard() {
  const buttonRef = useRef(null);
  const courseCardRef = useRef(null);
  const buttonAnimation = () => {
    courseButton(buttonRef.current);
  };
  const buttonAnimationReverse = () => {
    courseButtonReverse(buttonRef.current);
  };

  useEffect(() => {
    courseCardAnimation(courseCardRef.current);
  }, []);
  return (
    <div className="relative w-full h-screen   bg-cover bg-center font-poppins">
      <div
        ref={courseCardRef}
        onMouseEnter={buttonAnimation}
        onMouseLeave={buttonAnimationReverse}
        className="relative left-10  group w-80 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
      >
        {/* Course Image */}
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image6}
            alt="Nazra Quran With Tajweed"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Course Title */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900">
            Nazra Quran With Tajweed
          </h3>
        </div>

        <div
          ref={buttonRef}
          className="absolute opacity-0 bottom-0 left-0 w-full flex justify-center"
        >
          <button className=" bg-purple-600 text-white font-medium px-5 py-2 rounded-full shadow-lg">
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
}
