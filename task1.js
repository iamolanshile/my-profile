const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getUTCDay()];
const currentUTCTime = currentDate.toUTCString();

document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
).textContent = `Current Day of the Week: ${currentDay}`;
document.querySelector(
  '[data-testid="currentUTCTime"]'
).textContent = `Current UTC Time: ${currentUTCTime}`;
