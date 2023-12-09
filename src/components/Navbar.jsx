import React from "react";
import Link from "next/link";
import Darkmode from "./Darkmode";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = props => {
  const { setIsOpen, isOpen } = props;
  const imageUrl =
    "https://media.licdn.com/dms/image/D4E03AQFs-_wEviimfQ/profile-displayphoto-shrink_800_800/0/1667556838805?e=1706140800&v=beta&t=vR4vyLubvXH8BvrqH5yfhIu9j2PTkUc4rHVBN5irlu0";

  return (
    <div className="h-14 dark:bg-slate-900 bg-gray-50 dark:text-slate-50 lg:hidden transition-colors">
      <div className="flex justify-between px-6 h-full w-full">
        {/* Menu + Title */}
        <div className="flex gap-4 content-center">
          <button onClick={() => setIsOpen(true)}>
            <Bars3Icon className="w-6 h-6" />
          </button>
          <button>
            <Link href="/">Dashboard</Link>
          </button>
        </div>
        {/* Dark Mode */}
        {!isOpen && <Darkmode id={"navbar"} />}
        {/* Profile */}
        <button>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src={imageUrl} alt="user" className="fit-cover h-full w-full" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
