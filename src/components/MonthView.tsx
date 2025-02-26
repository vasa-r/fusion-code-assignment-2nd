import { useState } from "react";
import { getMonthData, monthNames } from "../utils/dates";
import { events } from "../utils/events";
import {
  ChevronLeft,
  ChevronRight,
  Music,
  Volleyball,
  WavesLadder,
} from "lucide-react";

const MonthView: React.FC = () => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const changeMonth = (offset: number) => {
    setMonth((prevMonth) => {
      const newMonth = prevMonth + offset;
      if (newMonth < 0) {
        setYear((prevYear) => prevYear - 1);
        return 11;
      } else if (newMonth > 11) {
        setYear((prevYear) => prevYear + 1);
        return 0;
      }
      return newMonth;
    });
  };

  const calendarDays = getMonthData(year, month);

  return (
    <div className="w-full text-center overflow-hidden">
      <div className="flex justify-between font-heading text-black text-4xl mb-3">
        <div>
          <span className="font-extrabold">{monthNames[month]} </span>
          <span className="font-extralight">{year}</span>
        </div>
        <div>
          <button
            onClick={() => changeMonth(-1)}
            className="mr-2 cursor-pointer text-2xl bg-transparent border-none text-neutral-500"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => changeMonth(1)}
            className="cursor-pointer text-2xl bg-transparent border-none text-neutral-500"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 text-sm font-medium  text-neutral-500 ">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-x-[3px] gap-y-1 md:gap-y-4">
        {calendarDays.map(({ date, currentMonth }, index) => {
          const dayEvents = events.filter(
            (event) =>
              event.day === date && event.month === month && event.year === year
          );

          return (
            <div
              key={index}
              className={`p-2 rounded-lg ${
                Math.random() < 0.5 ? "pink-grad-month" : "blue-grad-month"
              } text-sm font-light h-[75px] ${
                currentMonth ? "text-black" : "text-neutral-500"
              }`}
            >
              <strong className="block">{date}</strong>
              {dayEvents.slice(0, 2).map((event, idx) => (
                <div key={idx} className="flex flex-col items-center gap-0">
                  {event.icon === "ladder" && <WavesLadder width={15} />}
                  {event.icon === "ball" && <Volleyball width={15} />}
                  {event.icon === "music" && <Music width={15} />}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthView;
