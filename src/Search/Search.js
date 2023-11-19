import React, { useState } from "react";
import Info from "../Info/Info.js";
import './Search.css';
export default function Search(props) {
  const [city, setCity] = useState("");
  const [showInfo, setShowInfo] = useState(false);
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
          className="searchInput"
          type="search"
          placeholder="Type a query"
          onChange={updateQuery}
        />
        <input className="searchBtn" type="submit" value="Search" />
      </form>
      {showInfo && <Info city={city} />}
    </>
  );
}