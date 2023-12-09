"use client";
import React, { useState } from "react";

const StoriesSlider = () => {
  const [state, setState] = useState("latest");

  return (
    <div className="space-y-2">
      <div className="flex space-x-4">
        <button
          className={`w-fit uppercase font-bold text-xs dark:text-slate-50 ${
            state === "latest" ? "text-inherit" : "text-gray-500"
          } `}
        >
          latest
        </button>
        <button
          className={`w-fit uppercase font-bold text-xs dark:text-slate-50 ${
            state === "popular" ? "text-inherit" : "text-gray-500"
          }`}
        >
          popular
        </button>
      </div>
      <div className="h-2 w-full rounded-sm bg-slate-400 dark:bg-slate-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-slate-800 dark:bg-slate-400"></div>
      </div>
    </div>
  );
};

export default StoriesSlider;
