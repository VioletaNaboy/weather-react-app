import React, { useState } from "react";
import Info from "./Info";
export default function Search(props) {
  const [city, setCity] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  // const [temp, setTemp] = useState("");
  // function handleClickF(event) {
  //   event.preventDefault();
  //   setTemperature(Math.round(props.temp * (9 / 5) + 32));
  // }
  function handleSearch(event) {
    event.preventDefault();
    if (city.length > 0) {
      setShowInfo(true);
    } else {
      alert("Enter a city");
    }
  }

  function updateQuery(event) {
    setShowInfo(false);
    setCity(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Type a query"
          onChange={updateQuery}
        />
        <input type="submit" value="Search" />
      </form>
      {showInfo && <Info city={city} />}
    </>
  );
}
