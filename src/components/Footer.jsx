import React from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <div className="border-t px-6 text-gray-400 group w-full h-10 bg-slate-50 dark:bg-slate-900 flex justify-between items-center transition-colors duration-300">
      {/* <span className="prose-sm">© 2023 Radovan Botik, All rights reserved</span> */}
      <span className="text-xs">© 2023 by Radovan Botik</span>
      <a
        href="https://www.linkedin.com/in/radovan-botik/"
        target="blank"
        className="flex   space-x-1 text-xs items-center"
      >
        <SparklesIcon className="w-3 h-3 group-hover:text-amber-400" />
        <span className="capitalize group-hover:text-gray-900 dark:group-hover:text-gray-50">get in touch</span>
      </a>
    </div>
  );
};

export default Footer;
