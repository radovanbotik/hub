import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Layout = ({ children }) => {
  return (
    // overflow-hidden rounded-xl
    // space-y-6
    <div className="w-full h-full ">
      {/* Breadcrumbs */}
      {/* <div className=" py-1 px-4  dark:bg-slate-900 bg-slate-50 ">
        <div className="flex gap-2  prose prose-sm capitalize items-center text-gray-400">
          <span>dashboard</span>
          <ChevronRightIcon className="w-4 h-4" />
          <span>reviews</span>
          <ChevronRightIcon className="w-4 h-4" />
          <span>product</span>
        </div>
      </div> */}
      <section className="h-full">{children}</section>
    </div>
  );
};

export default Layout;
