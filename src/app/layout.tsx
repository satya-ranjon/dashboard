"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Menubar from "@/components/menubar/Menubar";
import React, { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [isSmSidebarOpen, setIsSmSidebarOpen] = React.useState(false);
  const [width, setWidth] = React.useState(1025);

  const handleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    setIsSmSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setIsSidebarOpen(window.innerWidth > 1024 ? true : false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-neutral-100 flex justify-start items-start  max-w-[1850px] mx-auto 2xl:rounded-md overflow-hidden ">
          <div
            className={`  ${
              isSidebarOpen ? "xl:w-72" : "w-0"
            } w-0 duration-300 transition-all overflow-hidden ${
              width < 1025 ? `fixed ${isSmSidebarOpen && " w-72"}` : ""
            } top-16 z-50`}>
            <Sidebar />
          </div>
          <div className="w-full">
            <Menubar onClick={handleSidebar} />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
