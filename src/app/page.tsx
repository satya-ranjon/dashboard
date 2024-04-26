import Topbar from "@/components/dashboard/Topbar";
import SearchOptions from "@/components/dashboard/SearchOptions";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FaPlus } from "react-icons/fa6";

export default function Home() {
  return (
    <main className=" m-4">
      <Topbar />
      <SearchOptions />
      <div className="mt-3">
        <div className="flex justify-between items-center  ">
          <div className=" flex justify-start items-center gap-3">
            <Button variant="blue">
              <FaPlus className="mr-2 h-4 w-4" /> New
            </Button>
          </div>
          <div className=" flex justify-end items-center gap-3">
            <Button variant="outline">Clear</Button>
            <Button variant="blue">Search</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
