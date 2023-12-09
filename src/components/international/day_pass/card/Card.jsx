import Roaming from "./Roaming";
import AvailableService from "./AvailableService";
import Destination from "./Destination";
import PPU from "./PPU";
import Technology from "./Technology";
import Alert from "@/components/Alert";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

const Card = props => {
  const { country, idp, sudp, ppu, services, technology } = props.destination;

  return (
    <div className="bg-gray-200 max-w-md p-8 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100 relative">
      <div className="flex justify-between space-x-8">
        <Destination destination={country} />
        <Roaming idp={idp} sudp={sudp} ppu={ppu} />
      </div>
      <div className="flex justify-between mt-8 space-x-4 dark:text-gray-400">
        <AvailableService service={"Data"} value={services.data} />
        <AvailableService service={"Calling"} value={services.calling} />
        <AvailableService service={"TXT"} value={services.text} />
        <AvailableService service={"MMS"} value={services.mms} />
        <AvailableService service={"HD Voice"} value={services.hdv} />
      </div>
      <div className="flex flex-col  mt-8 space-x-4 p-4 dark:text-gray-400 border-t border-black dark:border-gray-700">
        {!idp && <Alert alert={"International Day Pass is not supported. The only avaible option is Pay-Per-Use"} />}
        <div className="flex justify-between mt-8 space-x-4">
          <PPU ppu={ppu} idp={idp} />
          <Technology technology={technology} />
        </div>
      </div>
      <div className="flex flex-col  mt-8 space-x-4 p-4 dark:text-gray-400 border-t border-black dark:border-gray-700">
        <a
          href="https://www.att.com/maps/wireless-coverage.html"
          target="_blank"
          rel="noreferrer"
          className="text-center"
        >
          <button
            type="button"
            className="px-8 py-3 font-semibold border rounded border-black dark:border-gray-100 text-inherit dark:text-gray-100 flex gap-4 mx-auto group"
          >
            Click here to check coverage
            <RocketLaunchIcon className="w-6 h-6 group-hover:text-amber-400" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
