import React from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

const ExclusiveSlider = () => {
  return (
    <div className="space-y-2">
      <div className="h-2 w-full rounded-sm bg-slate-400 dark:bg-slate-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-slate-800 dark:bg-slate-400"></div>
      </div>
      <button className="w-full flex justify-between items-center">
        <h5 className="uppercase font-bold text-xs dark:text-slate-50">SEE MORE STORIES</h5>
        <ArrowSmallRightIcon className="w-4 h-4 text-slate-800" />
      </button>
    </div>
  );
};

export default ExclusiveSlider;
