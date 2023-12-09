"use client";
import React from "react";
import {
  ArrowPathIcon,
  XMarkIcon,
  HomeIcon,
  DevicePhoneMobileIcon,
  GlobeAsiaAustraliaIcon,
  QuestionMarkCircleIcon,
  MapIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import Darkmode from "./Darkmode";

const Sidebar = props => {
  const { isOpen, setIsOpen } = props;
  const imageUrl =
    "https://media.licdn.com/dms/image/D4E03AQFs-_wEviimfQ/profile-displayphoto-shrink_800_800/0/1667556838805?e=1706140800&v=beta&t=vR4vyLubvXH8BvrqH5yfhIu9j2PTkUc4rHVBN5irlu0";

  const open = isOpen ? "translate-x-0" : "-translate-x-96";
  const opacity_100 = open ? "opacity-100" : "opacity-0";

  const quickLinks = [
    {
      id: 1,
      title: "find a store",
      desc: "find a nearest store",
      url: "https://www.att.com/stores/",
      icon: MapPinIcon,
    },
    {
      id: 2,
      title: "coverage",
      desc: "explore coverage in the area",
      url: "https://www.att.com/maps/wireless-coverage.html",
      icon: MapIcon,
    },
    {
      id: 3,
      title: "outages",
      desc: "observe situation in the area",
      url: "https://www.att.com/maps/wireless-coverage.html",
      icon: ExclamationTriangleIcon,
    },
    {
      id: 4,
      title: "device support",
      desc: "device support available to customers",
      url: "https://www.att.com/device-support/selector/",
      icon: QuestionMarkCircleIcon,
    },
    {
      id: 5,
      title: "discount programs",
      desc: "explore various discount programs available to customers",
      url: "https://www.att.com/device-support/selector/",
      icon: CurrencyDollarIcon,
    },
    {
      id: 6,
      title: "email",
      desc: "self service options for customer",
      url: "https://www.att.com/support/email-support",
      icon: EnvelopeIcon,
    },
  ];

  return (
    <div className={`z-40 fixed h-full top-0 left-0 ${open} transition-all duration-300 lg:translate-x-0 lg:absolute`}>
      <div className="fixed h-full  w-80 dark:bg-slate-900 bg-slate-50 top-0 left-0 border-r dark:border-slate-600 flex flex-col transition-colors duration-300">
        {/* logo */}
        <div className="w-full h-14 flex items-center justify-between p-4 dark:text-slate-50">
          <a href="/" className=" w-full h-full flex items-center ">
            <img
              src="https://dwglogo.com/wp-content/uploads/2020/05/att_logo_2000x1419.png"
              alt="site logo"
              className="h-full"
            />
            <span>MobilityHub</span>
          </a>
          <Darkmode id={"sidebar"} />
        </div>
        {/* list #1 */}
        <div className="px-4 py-6">
          <h5 className="text-xs p-2 dark:text-gray-400 first-letter:capitalize  uppercase">main</h5>
          <ul className="flex flex-col gap-1">
            <li className="rounded-sm text-sm group bg-blue-600 text-blue-50 dark:text-blue-50 hover:bg-slate-600/50  cursor-pointer transition-colors flex items-center py-2 px-2 gap-4">
              <HomeIcon className="w-[18px] h-[18px] text-blue-50 group-hover:text-slate-50 duration-75" />
              <a href="/" className=" group-hover:text-slate-50 duration-75 capitalize flex-1">
                Dashboard
              </a>
            </li>
            <li className="rounded-sm text-sm group hover:bg-slate-600/50 dark:text-gray-400 cursor-pointer transition-colors flex items-center py-2 px-2 gap-4">
              <DevicePhoneMobileIcon className="w-[18px] h-[18px] text-gray-500 group-hover:text-slate-50 duration-75" />
              <a
                href="/devices/setup_watch_for_familymember"
                className=" group-hover:text-slate-50 duration-75 capitalize flex-1"
              >
                Devices
              </a>
            </li>
            <li className="rounded-sm text-sm group hover:bg-slate-600/50 dark:text-gray-400 cursor-pointer transition-colors flex items-center py-2 px-2 gap-4">
              <GlobeAsiaAustraliaIcon className="w-[18px] h-[18px] text-gray-500 group-hover:text-slate-50 duration-75" />
              <a href="/international/day_pass" className=" group-hover:text-slate-50 duration-75 capitalize flex-1">
                International
              </a>
            </li>
            <li className="rounded-sm text-sm group hover:bg-slate-600/50 dark:text-gray-400 cursor-pointer transition-colors flex items-center py-2 px-2 gap-4">
              <ArrowPathIcon className="w-[18px] h-[18px] text-gray-500 group-hover:text-slate-50 duration-75" />
              <a href="/convert" className=" group-hover:text-slate-50 duration-75 capitalize flex-1">
                Convert
              </a>
            </li>
          </ul>
        </div>
        {/* list #2 */}
        <div className="px-4 py-6">
          <h5 className="text-xs p-2 dark:text-gray-400 first-letter:capitalize prose uppercase">quicklinks</h5>
          <ul className="flex flex-col gap-1">
            {quickLinks
              .sort((a, b) => {
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;
                return 0;
              })
              .map(link => {
                return (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      target="blank"
                      className="rounded-sm text-sm group hover:bg-gray-700/50 dark:text-gray-400 cursor-pointer transition-colors duration-300 flex items-center py-2 px-2 gap-4 no-underline"
                    >
                      {/* <ArrowPathIcon className="w-[18px] h-[18px] text-gray-500 group-hover:text-slate-50 duration-75" /> */}
                      <link.icon className="w-[18px] h-[18px] text-gray-500 group-hover:text-slate-50 duration-75" />
                      <span className=" group-hover:text-slate-50 duration-75 capitalize">{link.title}</span>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        {/* user */}
        <div className="mt-auto w-full hidden lg:flex items-center p-4 ">
          <button className=" w-full h-full rounded-sm group hover:bg-slate-600/50 dark:text-gray-400 hover:text-slate-50 cursor-pointer transition-colors duration-300 flex items-center py-2 px-4 gap-4">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src={imageUrl} alt="user" className="fit-cover h-full w-full" />
            </div>
            <span className="text-sm capitalize">radovan botik</span>
          </button>
        </div>
      </div>
      <div
        className={`fixed w-14 h-14 bg-transparent top-0 left-80 transition-opacity ${opacity_100} duration-300 lg:hidden`}
      >
        <div className="w-full h-full grid place-content-center">
          <button onClick={() => setIsOpen(false)}>
            <XMarkIcon className="w-[18px] h-[18px] text-gray-50" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
