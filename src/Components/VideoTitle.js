import { IoMdPlay } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-4 sm:px-8 lg:px-24 absolute z-10">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
        {title}
      </h1>
      <p className="py-4 text-base sm:text-lg lg:text-lg xl:w-1/2 text-white">
        {overview}
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <button className="bg-white text-black p-2 sm:p-3 px-4 sm:px-7 text-lg sm:text-xl font-semibold rounded-lg opacity-80 hover:bg-opacity-50">
          <span className="flex items-center justify-center gap-1">
            <IoMdPlay className="pt-1" size={18} />
            Play
          </span>
        </button>
        <button className="text-black p-2 sm:p-3 px-4 sm:px-7 text-lg sm:text-xl font-semibold rounded-lg">
          <span className="flex items-center justify-center gap-1 text-white">
            <IoIosInformationCircleOutline className="pt-1" size={18} />
            More Info
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
