"use client";
import React, { useState } from "react";
import data from "../../../data/destinations";
import Modal from "@/components/Modal";
import Form from "@/components/international/day_pass/Form";
import List from "@/components/international/day_pass/list/List";

export default function page() {
  const [open, setOpen] = useState(true);
  //all destinations
  const [destinations, setDestinations] = useState(data);
  //selected destination
  const [destination, setDestination] = useState("");
  //find and match country
  const findCountry = userSearch => {
    const result = destinations.find(country => {
      return country.country.toLowerCase().startsWith(userSearch.trim().toLowerCase());
    });
    setDestination(result);
  };

  //bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900  text-gray-100

  return (
    <>
      <div className=" container mx-auto flex flex-col items-center px-4 py-16 md:py-24 md:px-10 lg:px-24 xl:max-w-3xl">
        <div>
          <h1 className="text-4xl text-center font-bold leading-none sm:text-5xl">
            AT&T
            <span className="text-yellow-400 block">International Day Pass®</span>destinations
          </h1>
          <p className="px-8 mt-8 mb-12 text-center text-lg">
            Find out where you can use International Day Pass, or other qualified add-ons outside of the U.S.
          </p>
        </div>
        <Form findCountry={findCountry} setOpen={setOpen} />
        {destination && <Modal destination={destination} open={open} setOpen={setOpen} />}
      </div>
      <List setDestination={setDestination} setOpen={setOpen} />
    </>
  );
}
