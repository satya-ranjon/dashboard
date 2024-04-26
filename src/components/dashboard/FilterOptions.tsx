import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { FaFilter, FaSearchPlus, FaHome, FaWhatsapp } from "react-icons/fa";
import { IoShareSocial, IoSettingsOutline } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FiPrinter } from "react-icons/fi";
import { MdElectricBolt } from "react-icons/md";
import { TbReload } from "react-icons/tb";
import { AiOutlineBars } from "react-icons/ai";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";

const FilterOptions = () => {
  return (
    <div className="mt-3">
      <div className="flex justify-between items-center  ">
        <div className=" flex justify-start items-center gap-3">
          <div className="flex justify-start items-center rounded-sm overflow-hidden">
            <button className="bg-[#577d57] px-3 py-2 text-white text-lg font-semibold flex justify-start items-center">
              <FaHome className="mr-2 h-4 w-4" /> Own
            </button>
            <button className="bg-white px-3 py-2 text-black text-lg font-semibold flex justify-start items-center">
              <IoShareSocial className="mr-2 h-4 w-4" /> Network
            </button>
          </div>
          <Button variant="blue">
            <FaPlus className="mr-2 h-4 w-4" /> New
          </Button>
        </div>
        <div className=" flex justify-end items-center gap-3">
          <Button variant="outline" size="icon">
            <FaFilter />
          </Button>
          <Button variant="outline" size="icon">
            <FaSearchPlus />
          </Button>
          <Button variant="outline">Clear</Button>
          <Button variant="blue">Search</Button>
        </div>
      </div>
      <div className="mt-3">
        <div className=" flex justify-between items-center">
          <div className=" flex justify-start items-center gap-4">
            <div className=" flex justify-start items-center">
              <Select>
                <SelectTrigger className="w-fit rounded-none">
                  <SelectValue
                    placeholder={
                      <FaHome className=" text-neutral-500 text-xl" />
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Options</SelectLabel>
                    <SelectItem value="Option 1">Option 1</SelectItem>
                    <SelectItem value="Option 2">Option 2</SelectItem>
                    <SelectItem value="Option 3">Option 3</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button size="icon" variant="outline" className=" rounded-none">
                <FiPrinter className=" text-neutral-500 text-xl" />
              </Button>
              <Button size="icon" variant="outline" className=" rounded-none">
                <FaWhatsapp className=" text-neutral-500 text-xl" />
              </Button>
              <Button size="icon" variant="outline" className=" rounded-none">
                <MdElectricBolt className=" text-neutral-500 text-xl " />
              </Button>
            </div>
            <div className=" flex justify-start items-center">
              <Button size="icon" variant="outline" className=" rounded-none">
                <TbReload className=" text-black text-xl" />
              </Button>
              <Button size="icon" variant="outline" className=" rounded-none">
                <AiOutlineBars className=" text-black text-xl" />
              </Button>
              <Button size="icon" variant="outline" className=" rounded-none">
                <IoSettingsOutline className=" text-black text-xl " />
              </Button>
            </div>
          </div>
          <div className=" flex justify-end items-center gap-4">
            <div className=" flex justify-start items-center">
              <Select>
                <SelectTrigger className="w-fit rounded-none">
                  <SelectValue placeholder="24" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Options</SelectLabel>
                    <SelectItem value="48">48</SelectItem>
                    <SelectItem value="96">96</SelectItem>
                    <SelectItem value="140">140</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className=" flex justify-start items-center">
              <Button size="icon" variant="outline" className=" rounded-none">
                <MdKeyboardDoubleArrowLeft className=" text-neutral-500 text-xl" />
              </Button>
              <Button size="icon" variant="outline" className=" rounded-none">
                <MdKeyboardArrowLeft className=" text-neutral-500 text-xl " />
              </Button>
              <Button size="icon" variant="outline" className=" rounded-none">
                <MdKeyboardArrowRight className=" text-[#0471a4] text-xl" />
              </Button>
              <Button size="icon" variant="outline" className=" rounded-none">
                <MdKeyboardDoubleArrowRight className=" text-[#0471a4] text-xl " />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
