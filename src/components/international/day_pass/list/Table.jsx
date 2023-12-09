import destinations from "@/data/destinations";
import { CursorArrowRippleIcon } from "@heroicons/react/24/outline";

const Table = props => {
  let letterKey = {};
  destinations.map(country => {
    let firstLetter = country.country[0];
    if (letterKey[firstLetter]) {
      letterKey[firstLetter].push(country);
    } else {
      letterKey[firstLetter] = [];
    }
  });

  const keys = Object.keys(letterKey);

  const { setDestination, setOpen } = props;
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 ">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Destinations</h2>
      <div className="overflow-x-auto overflow-y-auto max-h-[54rem] no-scrollbar">
        <table className="p-6 w-full text-xs text-left  table-fixed">
          <colgroup>
            <col className="w-10" />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-10" />
          </colgroup>
          <thead>
            <tr className="dark:bg-gray-700">
              <th className="p-3 whitespace-nowrap top-0 sticky bg-black">A-Z</th>
              <th className="p-3 break-words  top-0 sticky bg-black">Destination</th>
              <th className="p-3 break-words top-0 sticky bg-black">Select Unlimited Domestic Plans</th>
              <th className="p-3 top-0 sticky bg-black">International Day Pass®</th>
              <th className="p-3 top-0 sticky bg-black">Pay-Per-Use</th>
              <th className="p-3 top-0 sticky bg-black">Available Technology</th>
              <th className="p-3 top-0 sticky bg-black">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>

          {keys.map(letter => {
            return (
              <tbody key={letter} className="border-b dark:bg-black/30  dark:border-gray-700">
                {letterKey[letter].map(country => {
                  return (
                    <tr key={country.country}>
                      <td className="px-3 text-2xl font-medium dark:text-gray-600">
                        {letterKey[letter][0] === country && letter}
                      </td>

                      <>
                        <td className="px-3 py-2">
                          <p
                            className="underline cursor-pointer"
                            onClick={e => {
                              setDestination(country);
                              setOpen(true);
                            }}
                          >
                            {country.country}
                          </p>
                        </td>
                        <td className="px-3 py-2">
                          <span>{country.sudp ? "Yes" : "No"}</span>
                          {/* <p className="dark:text-gray-400">Spirit Media</p> */}
                        </td>
                        <td className="px-3 py-2">
                          <p>{country.idp ? "Yes" : "No"}</p>
                        </td>
                        <td className="px-3 py-2">
                          <p>{country.ppu ? "Yes" : "No"}</p>
                        </td>
                        <td className="px-3 py-2">
                          <p>{country.technology.join("/")}</p>
                          {/* <p className="dark:text-gray-400">United Kingdom</p> */}
                        </td>
                        <td className="px-3 py-2">
                          <button
                            type="button"
                            title="Open details"
                            className="p-1 rounded-full
                             hover:dark:bg-gray-700 focus:dark:bg-gray-700"
                            onClick={e => {
                              setDestination(country);
                              setOpen(true);
                            }}
                          >
                            <CursorArrowRippleIcon className="w-4 h-4" />
                          </button>
                        </td>
                      </>
                    </tr>
                  );
                })}
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Table;
