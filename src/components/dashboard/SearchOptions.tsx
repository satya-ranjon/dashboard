import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { LuPlusSquare, LuMinusSquare } from "react-icons/lu";

const SearchOptions = () => {
  return (
    <div className="flex justify-between items-center gap-5 bg-white p-3 py-5 border-x-2 border-b-2">
      <div className="w-full space-y-4">
        <div className=" w-full flex justify-start items-center gap-5">
          <div className="fit">
            <Label className=" text-lg text-neutral-600" htmlFor="Search">
              Search
            </Label>
            <Select>
              <SelectTrigger className="w-[180px] ">
                <SelectValue placeholder="Everywhere" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <Label className=" text-lg text-neutral-600" htmlFor="Match">
              Match
            </Label>
            <div className="flex justify-start items-center w-full">
              <span className=" w-10 flex justify-center items-center h-[40px] bg-neutral-300 rounded-s-sm">
                <Checkbox id="Match" />
              </span>
              <Input
                id="Match"
                type="text"
                placeholder="Search"
                className="w-full rounded-s-none"
              />
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-start items-center gap-5">
          <div className="w-full">
            <Label className=" text-lg text-neutral-600" htmlFor="Search">
              Bedrooms
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <Label className=" text-lg text-neutral-600" htmlFor="Search">
              Bedrooms
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className=" w-full space-y-4">
        <div className=" w-full">
          <Label
            className=" text-lg text-neutral-600 flex justify-start items-center gap-2"
            htmlFor="Search">
            ES Locations{" "}
            <span className=" flex justify-start items-center gap-1 text-cyan-600 cursor-pointer">
              <LuPlusSquare />
              Add
            </span>
            <span className=" flex justify-start items-center gap-1 text-cyan-600 cursor-pointer">
              <LuMinusSquare />
              Reset
            </span>
          </Label>
          <div className=" w-full flex justify-start items-center ">
            <Input id="Match" type="text" className="w-full rounded-e-none" />
            <Select>
              <SelectTrigger className="w-fit bg-neutral-200 rounded-s-none">
                <SelectValue placeholder="Exact" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className=" w-full flex justify-start items-center gap-5">
          <div className="w-full">
            <Label className=" text-lg text-neutral-600" htmlFor="price_from">
              Price from
            </Label>
            <Input
              id="price_from"
              type="text"
              placeholder="$"
              className="w-full rounded-e-none"
            />
          </div>
          <div className="w-full">
            <Label className=" text-lg text-neutral-600" htmlFor="price_to">
              Price to
            </Label>
            <Input
              id="price_to"
              type="text"
              placeholder="$"
              className="w-full rounded-e-none"
            />
          </div>
        </div>
      </div>
      <div className=" w-full space-y-4">
        <div className=" w-full">
          <Label
            className=" text-lg text-neutral-600 flex justify-start items-center gap-2"
            htmlFor="Search">
            Type
            <span className=" flex justify-start items-center gap-1 text-cyan-600 cursor-pointer">
              <LuPlusSquare />
              Add
            </span>
            <span className=" flex justify-start items-center gap-1 text-cyan-600 cursor-pointer">
              <LuMinusSquare />
              Reset
            </span>
          </Label>
          <Input id="type" type="text" className="w-full rounded-e-none" />
        </div>
        <div className="w-full">
          <Label className=" text-lg text-neutral-600" htmlFor="Search">
            Publication status
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Online/Offline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SearchOptions;
