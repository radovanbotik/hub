import { MapPinIcon } from "@heroicons/react/24/solid";

const Destination = ({ destination }) => {
  return (
    <div className="flex flex-col items-center">
      <MapPinIcon className="w-24 h-24 p-2 dark:text-red-400 text-red-400 fill-current" />
      <h1 className="text-xl font-semibold text-center">{destination}</h1>
    </div>
  );
};

export default Destination;
