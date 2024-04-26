import { FaSearch, FaUser, FaExpandAlt } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Switch } from "@/components/ui/switch";
import { FaPencil } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Topbar = () => {
  return (
    <div className=" pr-4 flex justify-between items-center bg-neutral-50">
      <div className=" w-full flex justify-start items-center">
        <div className=" bg-white cursor-pointer flex justify-start items-center gap-2 px-3 py-2 border-x-2 border-b-2 border-t-[3px] border-t-cyan-500 text-neutral-800">
          <FaSearch />
          <span className=" font-semibold text-xl">Results</span>
          <span
            className={` text-white bg-lime-700 text-xs p-1 rounded-xl w-8 text-center`}>
            256
          </span>
        </div>
        <div className=" w-full cursor-pointer flex justify-start items-center gap-2 px-3 py-2 border-r-2 border-b-2 border-t-[3px] border-t-none text-neutral-500">
          <IoEyeSharp />
          <span className=" font-semibold text-xl">Details</span>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <div className="cursor-pointer flex justify-start items-center gap-3 px-3 py-[10px] border-r-2 border-b-2 border-t-[3px] border-t-none text-neutral-500">
          <FaPencil className=" text-2xl" />
          <Switch id="airplane-mode" />
        </div>
        <div className="cursor-pointer flex justify-start items-center gap-3 px-3 py-[10px] border-r-2 border-b-2 border-t-[3px] border-t-none text-neutral-500">
          <FaUser className=" text-2xl" />
          <Switch id="airplane-mode" />
        </div>
        <div className="cursor-pointer  px-3 py-[10px] border-r-2 border-b-2 border-t-[3px] border-t-none text-neutral-500">
          <IoIosArrowBack className=" text-2xl" />
        </div>
        <div className="cursor-pointer  px-3 py-[10px] border-r-2 border-b-2 border-t-[3px] border-t-none text-neutral-500">
          <IoIosArrowForward className=" text-2xl" />
        </div>
        <div className="cursor-pointer  px-3 py-[10px] border-r-2 border-b-2 border-t-[3px] border-t-none text-neutral-500">
          <FaExpandAlt className=" text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
