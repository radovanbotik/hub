import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const Alert = ({ alert }) => {
  return (
    <div className="flex flex-row pl-4 py-2 gap-2 items-center border rounded-lg shadow overflow-hidden dark:text-slate-50 border-amber-400">
      <span className="flex-shrink-0 inline-flex mx-3 item-center justify-center leading-none rounded-full bg-amber-400 text-gray-900">
        <ExclamationCircleIcon className="h-8 w-8 " />
      </span>
      <div className="flex-1 p-2">
        <p className="text-sm dark:text-gray-100">{alert}</p>
      </div>
    </div>
  );
};

export default Alert;
