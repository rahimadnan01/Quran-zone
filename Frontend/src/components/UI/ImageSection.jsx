import { hero, image1, image2, image3, image4 } from "../../assets";
export default function ImageGrid() {
  return (
    <div className="relative w-full h-screen  bg-cover bg-center font-poppins mb-[3rem]">
      <div className="grid grid-cols-2 gap-4 p-6 max-w-5xl mx-auto ">
        {/* Large Image on Left */}
        <div
          className="relative rounded-md col-span-1 h-100 bg-cover bg-center"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold">
            <span className="transition-opacity text-3xl duration-300 opacity-0 hover:opacity-100">
              Quran
            </span>
          </div>
        </div>

        <div className="col-span-1 flex flex-col gap-4">
          {/* Medium Image on Top Right */}
          <div
            className="relative rounded-md h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${image2})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold">
              <span className="transition-opacity duration-300 opacity-0 hover:opacity-100 text-3xl">
                Tajweed
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Small Images on Bottom Right */}
            <div
              className="relative rounded-md h-80 bg-cover bg-center"
              style={{ backgroundImage: `url(${image4})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-md font-bold">
                <span className="transition-opacity text-2xl duration-300 opacity-0 hover:opacity-100">
                  Education
                </span>
              </div>
            </div>
            <div
              className="relative h-80 rounded-md bg-cover bg-center"
              style={{ backgroundImage: `url(${image3})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-md font-bold">
                <span className="transition-opacity text-2xl duration-300 opacity-0 hover:opacity-100">
                  Recitation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
