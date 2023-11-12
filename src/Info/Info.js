import React, { useState } from "react";
import axios from "axios";
export default function Info(props) {
  let t;
  const [temp, setTemp] = useState(null);
  const [wind, setWind] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState(null);
  function handleClickF(event) {
    event.preventDefault();
    setTemp(Math.round(temp * (9 / 5) + 32));
  }
  function handleClickC(event) {
    event.preventDefault();
    setTemp(t);
  }
  const city = props.city.trim().toLowerCase();
  const keyAPI = "e6c2364656962bdcb16bc352fc42569a";
  let getedAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyAPI}&units=metric`;
  function handleTemp({ data }) {
    t = data.main.temp;
    setTemp(Math.round(data.main.temp));
    setHumidity(data.main.humidity);
    setWind(data.wind.speed);
    setDescription(data.weather[0].description);
    setIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
  }
  axios
    .get(getedAPI)
    .then(handleTemp)
    .catch(function (error) {
      console.log(error);
    });

  return (
    <>
      <h2>
        It is currently {temp}{" "}
        <a href="/" onClick={handleClickC}>
          °C
        </a>{" "}
        |{" "}
        <a href="/" onClick={handleClickF}>
          °F
        </a>{" "}
        in {props.city}
      </h2>
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