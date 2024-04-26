import React from "react";
import Topbar from "@/components/dashboard/Topbar";
import SearchOptions from "@/components/dashboard/SearchOptions";
import { ScrollArea } from "@/components/ui/scroll-area";
import FilterOptions from "@/components/dashboard/FilterOptions";
import Propertys from "@/components/dashboard/Propertys";

export default function Home() {
  return (
    <main className=" m-4">
      <Topbar />
      <ScrollArea className="h-[765px] w-full pr-4 ">
        <SearchOptions />
        <FilterOptions />
        <Propertys />
      </ScrollArea>
    </main>
  );
}
