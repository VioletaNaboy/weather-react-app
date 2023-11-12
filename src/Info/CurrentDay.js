import React from "react";

export const CurrentDay = () => {
  let date = new Date();
  
const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
    ];
  let weekday = weekdays[date.getDay()];
  let month = months[date.getMonth()];
  let day = date.getDate();
  let year = date.getFullYear();
    let time = `${date.getUTCHours()}:${date.getUTCMinutes() < 10 ? `0${date.getUTCMinutes()}` : date.getUTCMinutes()}`;
  return (
    <h3>{weekday} {time}, {month} {day}, {year}</h3>
  );
};