import React from "react";

const Calendar = ({ date }) => {
  const [day, month, year] = date.split("/").map(Number);
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const monthName = firstDayOfMonth.toLocaleString("default", {
    month: "long",
  });

  const totalDays = new Date(year, month, 0).getDate();


  const startDay = firstDayOfMonth.getDay();

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <div className="w-72 p-4 m-auto mt-3 border border-1 border-[grey] rounded-lg text-center">
  
      <div className="text-lg font-semibold mb-4">
        {monthName} {year}
      </div>


      <div className="grid grid-cols-7 gap-2 mb-2 text-sm font-medium">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-sm">

        {Array.from({ length: startDay }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}

        {Array.from({ length: totalDays }).map((_, index) => (
          <div key={index} className={`${index+1 === Number(day) ? 'bg-[black] text-[white]':''}`} >{index + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
1