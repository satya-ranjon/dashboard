import Image from "next/image";
import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { DropDownMenuItem, MenuItem, SubMenuItem } from "../ui/sidebar";
import { RiDashboardLine } from "react-icons/ri";
import { SiGoogleadsense } from "react-icons/si";
import {
  MdContacts,
  MdCurrencyExchange,
  MdOutlineContactMail,
} from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";
import { GrUserManager } from "react-icons/gr";

const Sidebar = () => {
  const items = [
    {
      name: "Dashboard",
      url: "/",
      icon: <AiFillDashboard />,
      badge: 25,
    },
    {
      name: "Properties",
      icon: <FaHome />,
      items: [
        {
          name: "Sales",
          url: "/",
        },
        {
          name: "Short term",
          url: "/",
        },
        {
          name: "Long term",
          url: "/",
        },
        {
          name: "All",
          url: "/",
        },
      ],
    },
    {
      name: "Developments",
      url: "/",
      icon: <RiDashboardLine />,
    },
    {
      name: "New Leads",
      url: "/",
      icon: <SiGoogleadsense />,
      badge: 25,
      badgeColor: "bg-yellow-800",
    },
    {
      name: "Contacts",
      icon: <MdContacts />,
      items: [
        {
          name: "Option 1",
          url: "/",
        },
      ],
    },
    {
      name: "Sales",
      url: "/",
      icon: <MdCurrencyExchange />,
    },
    {
      name: "Calendar",
      url: "/",
      icon: <FaCalendarAlt />,
    },
    {
      name: "Newsletters",
      icon: <FaNewspaper />,
      items: [
        {
          name: "Option 1",
          url: "/",
        },
      ],
    },
    {
      name: "REMS",
      icon: <MdOutlineContactMail />,
      items: [
        {
          name: "Option 1",
          url: "/",
        },
      ],
    },
    {
      name: "AgentChat",
      icon: <IoMdChatbubbles />,
      url: "/",
      badge: 14,
      badgeColor: "bg-cyan-800",
    },
    {
      name: "Management",
      icon: <GrUserManager />,
      items: [
        {
          name: "Option 1",
          url: "/",
        },
      ],
    },
  ];
  return (
    <div className=" w-full h-screen bg-neutral-950 text-white">
      <div className="flex px-5 py-5 items-center justify-start font-semibold text-2xl gap-3 mb-4">
        <Image src="/house.png" alt="logo" width={32} height={32} />
        <span>inmobalia</span>
      </div>
      <div className="">
        {items.map((item, index) => (
          <>
            {item.items ? (
              <DropDownMenuItem key={index} label={item.name} icon={item.icon}>
                {item.items.map((subItem, index) => (
                  <SubMenuItem
                    key={index}
                    label={subItem.name}
                    url={subItem.url}
                  />
                ))}
              </DropDownMenuItem>
            ) : (
              <MenuItem
                key={index}
                label={item.name}
                url={item.url}
                icon={item.icon}
                badge={item.badge}
                badgeColor={item.badgeColor}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
