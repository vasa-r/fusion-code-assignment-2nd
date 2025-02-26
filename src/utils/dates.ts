export const getWeekDates = (): {
  day: string;
  date: number;
  month: number;
  year: number;
}[] => {
  const today = new Date();
  const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return {
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    };
  });
};

export const getMonthData = (year: number, month: number) => {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const leadingDays = firstDayOfMonth;
  const totalCells = daysInMonth + leadingDays;
  const rows = Math.ceil(totalCells / 7);
  const totalGridCells = rows * 7;

  const calendarDays = [];

  for (let i = leadingDays; i > 0; i--) {
    calendarDays.push({ date: prevMonthDays - i + 1, currentMonth: false });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({ date: i, currentMonth: true });
  }

  while (calendarDays.length < totalGridCells) {
    calendarDays.push({
      date: calendarDays.length - daysInMonth - leadingDays + 1,
      currentMonth: false,
    });
  }

  return calendarDays;
};

export const formatTime = (hour: number): string => {
  const period = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:00 ${period}`;
};

export const monthNames: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
