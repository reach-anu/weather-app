import React from "react";

const WeatherCard = ({
  cityName,
  currentTemp,
  weatherCondition,
  weatherIcon,
  tempUnit,
}) => {
  return (
    <div className="weatherCardContainer">
      <h2>{cityName}</h2>
      <div className="weatherInfo">
        <div>
          <p>{weatherCondition}</p>
          <p>
            {currentTemp} <span>°{tempUnit}</span>
          </p>
        </div>
        <img src={weatherIcon} alt={weatherCondition} className="weatherIcon" />
      </div>
    </div>
  );
};

export default WeatherCard;
