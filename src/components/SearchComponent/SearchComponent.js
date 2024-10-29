import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchComponent = ({
  addFavorite,
  cities,
  selectedCity,
  setSelectedCity,
}) => {
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.latitude}&longitude=${selectedCity.longitude}&hourly=temperature_2m`
      );
      setWeatherData({
        temperature: response.data.hourly.temperature_2m[0],
        conditions: "Clear",
      });
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  return (
    <div className="max-w-lg w-full mx-auto p-6 bg-white text-gray-700 rounded-lg shadow-lg">
      <label className="block mb-2 text-lg font-semibold text-gray-700">
        Select City
      </label>
      <select
        value={selectedCity.name}
        onChange={(e) =>
          setSelectedCity(cities.find((city) => city.name === e.target.value))
        }
        className="w-full p-3 mb-4 border rounded-lg"
      >
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      <button
        onClick={getWeather}
        className="w-full py-2 mb-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
      >
        Get Weather
      </button>

      {weatherData && (
        <div className="text-gray-700">
          <p className="text-xl font-semibold">
            Temperature: {weatherData.temperature}°C
          </p>
          <p>Conditions: {weatherData.conditions}</p>
          <button
            onClick={() => addFavorite(selectedCity.name, weatherData)}
            className="mt-4 w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Add to Favorites
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
