import React from "react";
import Topbar from "@/components/dashboard/Topbar";
import SearchOptions from "@/components/dashboard/SearchOptions";
import { ScrollArea } from "@/components/ui/scroll-area";
import FilterOptions from "@/components/dashboard/FilterOptions";
import Propertys from "@/components/dashboard/Propertys";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className=" m-4">
      <Topbar />
      <ScrollArea className="h-[765px] w-full md:pr-4 ">
        <SearchOptions />
        <FilterOptions />
        <Suspense fallback="loading.....">
          <Propertys />
        </Suspense>
      </ScrollArea>
    </main>
  );
}
