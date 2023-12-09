import React, { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const Darkmode = props => {
  const { id } = props;
  const [isChecked, setIsChecked] = useState(false);

  //Two different IDs causing bug, AFTER RESIZING THE ID IS DIFFERENT AND CHECKED STATUS IS NOT SYNCED
  const toggleDarkmode = e => {
    const checked = e.currentTarget.checked;
    if (checked) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  return (
    <label htmlFor={`toggle-${id}`} className="flex items-center cursor-pointer gap-1 ml-auto mr-4">
      {/* <span className="prose-sm"></span> */}
      <span className="relative">
        <input
          id={`toggle-${id}`}
          type="checkbox"
          className="peer hidden"
          onClick={e => {
            setIsChecked(prev => !prev);
            toggleDarkmode(e);
          }}
          value={isChecked}
        />
        <div className="w-10 h-6 rounded-full bg-zinc-300  dark:bg-slate-800"></div>
        <div className="inset-y-0 left-0 group m-1 grid place-content-center absolute h-4 w-4 rounded-full  peer-checked:translate-x-full transition-transform">
          <SunIcon className={`w-4 h-4 rounded-full rotate bg-amber-400 ${isChecked ? "hidden" : "blocked"}`} />
          <MoonIcon
            className={`w-4 h-4 rounded-full stroke-amber-400 fill-amber-400 ${isChecked ? "block" : "hidden"}`}
          />
        </div>
        {/* <SunIcon className="w-4 h-4 block peer-checked:hidden inset-y-0 left-0 group m-1 absolute rounded-full rotate bg-amber-400" />
        <MoonIcon className="w-4 h-4 hidden peer-checked:block inset-y-0 left-0 group m-1 absolute rounded-full translate-x-0 peer-checked:translate-x-full stroke-amber-400 fill-amber-400" /> */}
      </span>
    </label>
  );
};

export default Darkmode;
