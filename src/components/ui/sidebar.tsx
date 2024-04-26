"use client";

import Link from "next/link";
import React from "react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

export const MenuItem = ({
  label,
  url,
  icon,
  badge,
  badgeColor,
}: {
  label: string;
  url: string;
  icon: React.ReactNode;
  badge?: number | string;
  badgeColor?: string;
}) => {
  return (
    <Link
      href={url}
      className=" flex justify-between items-center px-5  hover:bg-neutral-700 duration-300 py-3 cursor-pointer">
      <div className=" flex justify-start items-center gap-2 ">
        <span className=" text-2xl">{icon}</span>
        <span className="text-sm">{label}</span>
      </div>
      {badge && (
        <span
          className={` ${
            badgeColor || "bg-lime-700"
          } text-xs p-1 rounded-xl w-8 text-center`}>
          {badge}
        </span>
      )}
    </Link>
  );
};

export const SubMenuItem = ({ label, url }: { label: string; url: string }) => {
  return (
    <Link
      href={url}
      className="pl-7 hover:bg-neutral-700 cursor-pointer block select-none">
      <div className=" w-full border-l-[1px] border-neutral-400">
        <div className=" flex justify-start items-center gap-2">
          <span className=" w-3 h-[1px] bg-neutral-400 block"></span>
          <span className="py-3">{label}</span>
        </div>
      </div>
    </Link>
  );
};

export const DropDownMenuItem = ({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const height = Array.isArray(children)
    ? `h-[${children.length * 48}px]`
    : "h-[48px]";

  return (
    <>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={` ${
          isOpen ? "bg-neutral-700" : "hover:bg-neutral-700 duration-300"
        } flex justify-between items-center px-5 text-sm  py-3 cursor-pointer select-none`}>
        <div className=" flex justify-start items-center gap-2 ">
          <span className=" text-2xl">{icon}</span>
          <span className="text-sm">{label}</span>
        </div>
        {isOpen ? (
          <CiSquareMinus className=" text-lg" />
        ) : (
          <CiSquarePlus className=" text-lg" />
        )}
      </div>
      <div
        className={`bg-neutral-800 overflow-hidden duration-300 transition-all ${
          isOpen ? `${height}` : "h-0"
        }`}>
        {children}
      </div>
    </>
  );
};
