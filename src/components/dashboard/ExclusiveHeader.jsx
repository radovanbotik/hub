import React from "react";

const ExclusiveHeader = props => {
  return (
    <div className="space-y-1">
      <div className="space-x-2 flex items-center">
        <div className="bg-blue-500 rounded-full h-3 w-3"></div>
        <h5 className="uppercase font-bold text-xs dark:text-gray-400">how to</h5>
      </div>
      <h4 className="italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit</h4>
      <span className="text-xs">
        10 days ago by{" "}
        <a href="/" className="capitalize">
          radovan botik
        </a>
      </span>
    </div>
  );
};

export default ExclusiveHeader;
