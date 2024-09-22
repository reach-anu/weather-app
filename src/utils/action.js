export const getWeatherData = async (city) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_WEATHER_API_URL}&q=${city}&days=5&aqi=no&alerts=no`
    );

    if (!response.ok) {
      return { error: "Not a valid city" };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
