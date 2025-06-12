



import React, { useEffect, useState } from "react";

function Weather() {
  const [weatherData, setWeatherData] = useState([]);
  const countries = ["London", "Ghana", "Nigeria"];

  useEffect(() => {
    // Fetch weather data for each country and store it in an array
    const fetchDataForCountries = async () => {
      const weatherDataArray = [];

      for (const country of countries) {
        // Use "Ghana" in the API request
        const apiCountryName = country === "Ghana" ? "Accra" : country;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${apiCountryName}&appid=b16de29f75d99da9018d6df9d4a0c49d&units=metric`;
        const response = await fetch(url);
        const json = await response.json();
        weatherDataArray.push(json);
      }

      setWeatherData(weatherDataArray);
    };

    fetchDataForCountries();
  }, [countries]);

  return (
    <div className="weather">
      {weatherData.map((data, index) => (
        <div className="weather2" key={index}>
          {/* Display "Ghana" instead of "Accra" */}
          <h2>{countries[index] === "Ghana" ? "Ghana" : countries[index]}</h2>
          <p>Temperature: {data.main.temp}°C</p>
          <p>Description: {data.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          />
        </div>
      ))}
    </div>
  );
}

export default Weather;
