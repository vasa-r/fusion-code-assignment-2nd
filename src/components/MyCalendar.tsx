import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import { startOfWeek } from "date-fns";
import { getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import { useState } from "react";

const locales = { "en-US": enUS };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Birthday Party - Alice",
    start: new Date(Date.UTC(2025, 1, 26, 0, 0)),
    end: new Date(Date.UTC(2025, 1, 26, 7, 0)),
  },
  {
    title: "Birthday Party - David",
    start: new Date(Date.UTC(2025, 1, 26, 13, 0)),
    end: new Date(Date.UTC(2025, 1, 26, 20, 0)),
  },
];

export default function MyCalendar() {
  const [view, setView] = useState<"day" | "week" | "month">("week");

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

        {/* <div className="space-x-2">
          {["day", "week", "month"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v as "day" | "week" | "month")}
              className={`px-4 py-2 rounded-md ${
                view === v ? "bg-pink-500 text-white" : "bg-gray-200"
              }`}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div> */}
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["month", "week", "day"]}
        view={view}
        onView={(newView) => {
          if (newView === "day" || newView === "week" || newView === "month") {
            setView(newView);
          }
        }}
        style={{ height: 600 }}
      />
    </div>
  );
}
