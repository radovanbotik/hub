"use client";

import React, { useState } from "react";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
dayjs.extend(timezone);
dayjs.extend(utc);

const page = () => {
  const currentTime = dayjs(Date.now()).format("YYYY-MM-DDThh:mm");
  console.log({ localTime: currentTime });
  console.log({ newyork: dayjs(dayjs.tz(currentTime, "America/New_York").format()).format("YYYY-MM-DDThh:mm") });

  const [state, setState] = useState();
  const [localTime, setLocalTime] = useState(currentTime);
  const [adjustedTime, setAdjustedTime] = useState(localTime);

  const changeLocalTime = e => {
    console.log(e.target.value);
    setLocalTime(e.target.value);
  };

  const changeAdjustedTime = e => {
    setAdjustedTime(e.target.value);
  };

  let timezones = Intl.supportedValuesOf("timeZone");
  console.log(timezones);

  return (
    <div>
      <div>
        <label htmlFor="localTime">localTime</label>
        <input
          id="localtime"
          type="datetime-local"
          className="bg-amber-400 border-black border-2"
          value={localTime}
          onChange={changeLocalTime}
        />
      </div>
      <div>
        <label htmlFor="adjustedTime">adjustedTime</label>
        <input
          id="adjustedtime"
          type="datetime-local"
          className="bg-amber-400 border-black border-2"
          value={dayjs(dayjs.tz(localTime, "America/New_York").format()).format("YYYY-MM-DDThh:mm")}
          onChange={changeAdjustedTime}
        />
      </div>
    </div>
  );
};

export default page;
