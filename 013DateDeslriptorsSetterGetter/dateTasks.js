// Write a function that, given a date (in the format MM/DD/YYYY),returns the day of the week as a string.
// Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday",
// "Thursday", "Friday", or "Saturday".

function outputWeekDay(date) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const splittedDate = date.split("/");
  const day = splittedDate[0];
  const month = splittedDate[1] - 1;
  const year = splittedDate[2];
  const weekDayIndex = new Date(year, month, day).getDay();
  return weekDays[weekDayIndex];
}

console.log(outputWeekDay("01/06/2021"));

// Implement following function
// formatDate(new Date("2020-05-14")) -> "14 May 2020"

function formatDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "October",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

console.log(formatDate(new Date("2020-05-14")));
