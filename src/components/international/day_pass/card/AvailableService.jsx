import { CheckIcon, NoSymbolIcon } from "@heroicons/react/24/solid";

const AvailableService = ({ service, value }) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      <span className="uppercase">{service}</span>
      {value ? <CheckIcon className="w-8 h-8 text-green-400" /> : <NoSymbolIcon className="w-8 h-8 text-red-400" />}
      <span>{value ? "Yes" : "No"}</span>
    </div>
  );
};

export default AvailableService;
