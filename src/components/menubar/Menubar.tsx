"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDoubleArrow } from "react-icons/md";
import { FaArrowAltCircleRight, FaStar, FaBullhorn } from "react-icons/fa";
import { BiSolidPlusCircle } from "react-icons/bi";

const Menubar = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div className="  bg-[#0471a4]">
      <div className=" flex justify-between items-center">
        <div className=" pl-5 flex justify-start items-center gap-4">
          <div
            onClick={onClick}
            className=" px-[2px] py-[1px] w-fit rounded-sm bg-black text-white text-2xl cursor-pointer ">
            <GiHamburgerMenu />
          </div>
          <span className=" text-white flex justify-start items-center gap-2">
            Properties <MdDoubleArrow /> log term
          </span>
        </div>
        <div className=" flex justify-end items-center">
          <span className=" text-2xl text-white border-l-2 p-5 cursor-pointer">
            <FaBullhorn />
          </span>
          <span className=" text-2xl text-white border-l-2 p-5 cursor-pointer">
            <BiSolidPlusCircle />
          </span>
          <span className=" text-2xl text-white border-l-2 p-5 cursor-pointer">
            <FaStar />
          </span>
          <span className=" text-2xl text-white border-l-2 p-5 cursor-pointer">
            <FaArrowAltCircleRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
