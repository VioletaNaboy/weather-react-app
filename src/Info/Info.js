import React, { useState, useEffect } from "react";
import axios from "axios";
import { TempUnit } from "./TempUnit.js";
import { CurrentDay } from "./CurrentDay.js";
import { Forecast } from '../Forecast/Forecast.jsx'
export default function Info(props) {
  const [temp, setTemp] = useState(null);
  const [wind, setWind] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState(null); 
  const [coordinates, setCoordinates] = useState(null);
  const [forecast, setForecast] = useState(null);
  const city = props.city.trim().toLowerCase();
  const keyAPI = "e6c2364656962bdcb16bc352fc42569a";
  let getedAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyAPI}&units=metric`;
  function handleTemp({ data }) {
    setTemp(Math.round(data.main.temp));
    setHumidity(data.main.humidity);
    setWind(data.wind.speed);
    setDescription(data.weather[0].description);
    setCoordinates(data.coord);
    setIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
  }
  axios.get(getedAPI)
    .then(handleTemp)
    .catch(function (error) {
      console.log(error);
    });
 useEffect(() => {
    if (coordinates !== null) {
      let apiKey = "e6c2364656962bdcb16bc352fc42569a";
      let longitude = coordinates.lon;
      let latitude = coordinates.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl)
        .then(response => setForecast(response.data.daily))
        .catch(error => console.log(error));
    }
  }, [coordinates]);
  return (
    <>
          <TempUnit temp={temp} city={props.city} />
          <CurrentDay/>
      <ul>
        <li>Wind speed: {wind}</li>
        <li>Humidity: {humidity}%</li>
        <li>Description: {description}</li>
        <li>
          {" "}
          <img src={icon} alt="Icon" />
        </li>
      </ul>
      {forecast !== null ?<Forecast forecast={forecast} /> : null}
    </>
  );
}