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
