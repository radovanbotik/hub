import React, { useState } from "react";

const Form = props => {
  const { findCountry, setOpen } = props;
  const [userSearch, setUserSearch] = useState("");

  return (
    <div className="flex w-full rounded-md min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="lg:mt-10 text-center text-2xl font-bold leading-9 tracking-tight">Look up destination</h2>
      </div>
      <div className="lg:mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={e => {
            e.preventDefault();
            findCountry(userSearch);
            setOpen(true);
          }}
        >
          <div>
            <label htmlFor="destination" className="block text-sm font-medium leading-6">
              Destination
            </label>
            <div className="mt-2">
              <input
                id="destination"
                name="destination"
                type="destination"
                autoComplete="destination"
                value={userSearch}
                onChange={e => {
                  setUserSearch(e.target.value);
                }}
                required
                className="bg-white indent-2 block w-full text-gray-800 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-amber-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Search
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not on the list?{" "}
          <a
            href="https://www.att.com/ecms/dam/att/consumer/upperfunnel/2018/pdf/International-Travel-Guide.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-semibold leading-6 text-amber-400 hover:text-amber-300"
          >
            Check official .pdf
          </a>
        </p>
      </div>
    </div>
  );
};

export default Form;
