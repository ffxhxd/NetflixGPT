import { IoMdPlay } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute z-10">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div className="flex gap-1">
        <button className="bg-white text-black p-2 px-7 text-xl font-semibold rounded-lg opacity-80 hover:bg-opacity-50">
          <span className="flex align-center justify-center gap-1">
            {" "}
            <IoMdPlay className="pt-1" size={22} />
            Play
          </span>
        </button>
        <button className="text-black p-2 px-7 text-xl font-semibold rounded-lg">
          <span className="flex align-center justify-center gap-1 text-white">
            {" "}
            <IoIosInformationCircleOutline className="pt-1" size={22} />
            More Info
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
