import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

const InsuranceCard = props => {
  const { id, title, price, enrolled, deviceTotal, claims_loss_theft_pdamage, claims_acc_damage } = props;

  const formatPrice = price => {
    if (typeof price === "number") return `$${price}/mo.`;
    if (typeof price === "object" && price.length === 2) return `$${price[0]}-${price[1]}/mo.`;
  };

  return (
    <div className="w-full xl:w-1/2 flex flex-col p-6 space-y-6 rounded shadow dark:bg-slate-900 dark:text-gray-50">
      <div className="space-y-2">
        <h4 className="text-2xl font-bold">{title}</h4>
        <span className="text-6xl font-bold">{formatPrice(price)}</span>
      </div>
      <p className="mt-3 dark:text-gray-400">Here's what you get:</p>
      <ul className="flex flex-col mb-6 dark:text-gray-400 gap-2">
        <li className="flex gap-2">
          <CheckBadgeIcon className="h-6 w-6 dark:text-blue-400" />
          <span>{enrolled}</span>
        </li>
        <li className="flex gap-2">
          <CheckBadgeIcon className="h-6 w-6 dark:text-blue-400" />
          <span>
            Protection for {deviceTotal} {id > 1 ? "devices" : "device"}
          </span>
        </li>
        <li className="flex gap-2">
          <CheckBadgeIcon className="h-6 w-6 dark:text-blue-400" />
          <span>Same day replacement and set up</span>
        </li>
        <li className="flex gap-2">
          <CheckBadgeIcon className="h-6 w-6 dark:text-blue-400" />
          <span>Unlimited screen repairs (service fees apply)</span>
        </li>
        <li className="flex gap-2">
          <CheckBadgeIcon className="h-6 w-6 dark:text-blue-400" />
          <span>Unlimited out-of-warranty malfunction claims</span>
        </li>
        <li className="flex gap-2">
          <CheckBadgeIcon className="h-6 w-6 dark:text-blue-400" />
          <span>Unlimited battery replacement</span>
        </li>
        <li className="flex gap-2">
          <CheckBadgeIcon className="h-6 w-6 dark:text-blue-400" />
          <span>Unlimited photo and video storage</span>
        </li>
        <li className="flex gap-2">
          <CheckBadgeIcon className="h-6 w-6 dark:text-blue-400" />
          <span>ProTech expert support</span>
        </li>
        <li className="flex gap-2">
          <CheckBadgeIcon className="h-6 w-6 dark:text-blue-400" />
          <span>
            {claims_loss_theft_pdamage} {id === 2 && "shared"} claims for loss, theft, and physical damage
          </span>
        </li>
        <li className="flex gap-2">
          <CheckBadgeIcon className="h-6 w-6 dark:text-blue-400" />
          <div className="flex flex-col">
            <span>
              {claims_acc_damage} {id === 2 && "shared"} claims for loss, theft, and physical damage
            </span>
            <span>*per consecutive 12-month period</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default InsuranceCard;
