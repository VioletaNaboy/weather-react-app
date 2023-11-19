import React from "react";
import './Forecast.css';
import DailyForecast from "./DailyForecast";

export const Forecast = ({ forecast }) => {

    return (
      <div className="forecast">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <DailyForecast data={dailyForecast} />
                </div>
              );
            }
          })}
    </div>
    );
  
}