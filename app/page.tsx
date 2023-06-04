"use client";

import Timer from "./components/timer";
import { Start } from "@/image/start";
import { Pause } from "@/image/pause";
import { Stop } from "@/image/stop";

import { useEffect, useState } from "react";

export default function Home() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const reset = () => {
    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if ((document.getElementById("play") as HTMLInputElement).checked) {
        setSeconds(seconds + 1);

        if (seconds == 60) {
          setSeconds(0);
          setMinutes(minutes + 1);
        }

        if (minutes == 60) {
          setMinutes(0);
          setHours(hours + 1);
        }

        if (hours == 24) {
          setHours(0);
          setDays(days + 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="flex flex-col justify-center gap-16 mt-24">
      <h1 className="font-bold text-4xl text-center text-primary-content">
        Cronômetro
      </h1>

      {Timer(days, hours, minutes, seconds)}

      <div className="flex flex-col">
        <div className="flex flex-row gap-8 justify-center">
          <div className="swap swap-rotate">
            <input type="checkbox" id="play" />
            <button className="btn btn-square btn-primary swap-off pointer-events-none">
              <Start />
            </button>
            <button className="btn btn-square btn-info swap-on pointer-events-none">
              <Pause />
            </button>
          </div>
          <button
            className="btn btn-circle btn-error text-base-300"
            onClick={reset}
          >
            <Stop />
          </button>
        </div>
      </div>
    </div>
  );
}
