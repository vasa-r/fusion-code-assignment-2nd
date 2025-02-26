import { useState } from "react";
import DayView from "./DayView";

const Calendar = () => {
  const [view, setView] = useState<"day" | "week" | "month">("day");

  return (
    <div className="md:shadow-xl w-full h-full md:p-5">
      <div className="flex flex-col gap-6 justify-between items-center mb-4">
        <div className="flex justify-between items-center w-full">
          <h2 className="md:text-3xl text-xl font-heading font-extrabold">
            Calendar
          </h2>
          <h2
            className="text-pink-600 cursor-pointer font-semibold"
            onClick={() => console.log("click")}
          >
            + New event
          </h2>
        </div>

        <div className="p-2 bg-light-bg w-full rounded-md flex items-center gap-1">
          {["day", "week", "month"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v as "day" | "week" | "month")}
              className={`flex-1 font-semibold px-2 py-1 text-sm rounded-md text-center cursor-pointer  ${
                view === v ? "bg-white text-black" : "text-neutral-500"
              }`}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>

        <div className="w-full">{view === "day" && <DayView />}</div>
      </div>
    </div>
  );
};

export default Calendar;
