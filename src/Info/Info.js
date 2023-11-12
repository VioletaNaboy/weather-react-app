import React, { useState } from "react";
import axios from "axios";
import { TempUnit } from "./TempUnit.js";
export default function Info(props) {
  const [temp, setTemp] = useState(null);
  const [wind, setWind] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState(null);
  const city = props.city.trim().toLowerCase();
  const keyAPI = "e6c2364656962bdcb16bc352fc42569a";
  let getedAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyAPI}&units=metric`;
  function handleTemp({ data }) {
    setTemp(Math.round(data.main.temp));
    setHumidity(data.main.humidity);
    setWind(data.wind.speed);
    setDescription(data.weather[0].description);
    setIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
  }
  axios.get(getedAPI)
    .then(handleTemp)
    .catch(function (error) {
      console.log(error);
    });

  return (
    <>
          <TempUnit temp={temp} city={props.city} />
      <ul>
        <li>Wind speed: {wind}</li>
        <li>Humidity: {humidity}%</li>
        <li>Description: {description}</li>
        <li>
          {" "}
          <img src={icon} alt="Icon" />
        </li>
      </ul>
    </>
  );
}