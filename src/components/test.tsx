import { events } from "../utils/events";
import { getWeekDates } from "../utils/dates";

const times = Array.from({ length: 24 }, (_, i) => ({
  label: `${i % 12 || 12}${i < 12 ? "AM" : "PM"}`,
  value: i,
}));

const WeekView = () => {
  const weekDays = getWeekDates();

  return (
    <div className="w-full h-full flex flex-col">
      <div className="grid border border-gray-300 grid-cols-[40px_repeat(7,1fr)] bg-transparent sticky top-0 z-10">
        <div className="p-2 text-center border-r border-gray-300"></div>
        {weekDays.map(({ day, date }) => (
          <div key={date} className="p-2 text-center border-gray-300">
            <span className="text-neutral-400 font-medium text-xs">{day}</span>
            <br />
            <span className="text-neutral-500 font-bold text-sm">{date}</span>
          </div>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto">
        <div
          className="grid grid-cols-[40px_repeat(7,1fr)] border border-gray-300 relative font-sans w-full"
          style={{ minHeight: "1440px" }}
        >
          {times.map(({ label }, index) => (
            <div
              key={label}
              className="font-semibold text-xs text-neutral-500 flex text-center items-start justify-center border-gray-300 sticky left-0 z-10"
              style={{ gridRow: index + 1, height: "60px" }}
            >
              {label}
            </div>
          ))}

          {weekDays.flatMap(({ date, month, year }, colIndex) =>
            times.map(({ value }, rowIndex) => {
              const matchingEvents = events.filter(
                (event) =>
                  event.day === date &&
                  event.month === month &&
                  event.year === year &&
                  event.start <= value &&
                  event.end > value
              );

              return (
                <div
                  key={`${date}-${value}`}
                  className="border-l border-gray-300 relative col-span-1"
                  style={{ gridColumn: colIndex + 2, gridRow: rowIndex + 1 }}
                >
                  {matchingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="absolute w-[90%] left-[5%] rounded-md p-1 text-white text-center text-sm overflow-hidden"
                      style={{
                        background: event.color,
                        height: `${(event.end - event.start) * 60}px`,
                        top: "0px",
                      }}
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default WeekView;
