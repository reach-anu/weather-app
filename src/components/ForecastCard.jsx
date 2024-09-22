import React from "react";

const ForecastCard = ({  day, max, min, icon, tempUnit }) => {
  function getDayOfWeek(dateStr) {
    const date = new Date(dateStr);
    const today = new Date();
    if (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    ) {
      return "Today";
    }
    const options = { weekday: "short" };
    return date.toLocaleDateString("en-US", options);
  }
  return (
    <div className="forecastCardContainer">
      <p>{getDayOfWeek(day)}</p>
      <div className="forecastCardInfo">
        <div>
          <p>
            Max:{" "}
            <span>
              {max}°{tempUnit}
            </span>
          </p>
          <p>
            Min:{" "}
            <span>
              {min}°{tempUnit}
            </span>
          </p>
        </div>
        <img src={icon} alt="temp-icon" />
      </div>
    </div>
  );
};

export default ForecastCard;
