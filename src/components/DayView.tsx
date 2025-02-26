import { useState } from "react";
import { events } from "../utils/events";
import { getWeekDates } from "../utils/dates";
import EventCard from "./EventCard";

const DayView = () => {
  const weekDays = getWeekDates();
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState({
    date: today.getDate(),
    month: today.getMonth(),
    year: today.getFullYear(),
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-around gap-1.5 md:gap-4 md:px-[5%]">
        {weekDays.map(({ day, date, month, year }) => {
          const isSelected =
            selectedDate.date === date &&
            selectedDate.month === month &&
            selectedDate.year === year;

          return (
            <button
              key={`${year}-${month}-${date}`}
              onClick={() => setSelectedDate({ date, month, year })}
              className={`py-1 flex-1 rounded-md cursor-pointer ${
                isSelected ? "bg-[#FFF2F4] text-white" : "bg-white text-black"
              }`}
            >
              <span
                className={`text-xs font-medium ${
                  isSelected ? "text-pink-600" : "text-neutral-500"
                }  `}
              >
                {day}
              </span>
              <br />
              <span
                className={`text-sm ${
                  isSelected ? "text-pink-600" : "text-neutral-500"
                }  font-bold`}
              >
                {date}
              </span>
              <br />
              <div
                className={`${
                  !isSelected ? "bg-transparent" : "bg-pink-600"
                } w-[5px] h-[5px] rounded-full relative mt-2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
              ></div>
            </button>
          );
        })}
      </div>
      <div className="mt-3 flex flex-col gap-3">
        {events
          .filter(
            (event) =>
              event.day === selectedDate.date &&
              event.month === selectedDate.month &&
              event.year === selectedDate.year
          )
          .map(({ id, title, icon, start, end }) => (
            <EventCard
              key={id}
              title={title}
              icon={icon}
              start={start}
              end={end}
            />
          ))}
      </div>
    </div>
  );
};

export default DayView;
