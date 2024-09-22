import { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import { getWeatherData } from "./utils/action";
import SearchBar from "./components/SearchBar";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [search, setSearch] = useState("");
  const [currentCityData, setCurrentCityData] = useState();
  const [forecast, setForeCast] = useState();
  const [tempUnit, setTempUnit] = useState("C");

  //initially fetch the data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (city) => {
    const response = await getWeatherData(city || "London");
    if (response?.error) {
      return toast.error(response.error);
    }
    setCurrentCityData(response);
    setForeCast(response.forecast.forecastday);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      return toast.error("Search value can't be empty");
    }
    fetchData(search);
  };

  return (
    <div className="container">
      <header>
        <h1 className="heading">Weather Forecast App</h1>
      </header>
      <SearchBar
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
        tempUnit={tempUnit}
        setTempUnit={setTempUnit}
      />
      <div className="currentData">
        <WeatherCard
          cityName={currentCityData?.location?.name}
          currentTemp={
            tempUnit === "C"
              ? currentCityData?.current?.temp_c
              : currentCityData?.current?.temp_f
          }
          weatherCondition={currentCityData?.current?.condition?.text}
          weatherIcon={currentCityData?.current?.condition?.icon}
          tempUnit={tempUnit}
        />
        <div className="futureDataContainer">
          <h4>Forecast for next five days</h4>
          <div className="futureDataInfo">
            {forecast?.map((data, index) => (
              <ForecastCard
                key={index}
                day={data.date}
                max={tempUnit === "C" ? data.day.maxtemp_c : data.day.maxtemp_f}
                min={tempUnit === "C" ? data.day.mintemp_c : data.day.mintemp_f}
                icon={data.day.condition.icon}
                tempUnit={tempUnit}
              />
            ))}
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
