import React, { useState } from "react";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import FavoritesComponent from "./components/FavoritesComponent/FavoritesComponent";

const cities = [
  { name: "Berlin", latitude: 52.52, longitude: 13.41 },
  { name: "New York", latitude: 40.71, longitude: -74.01 },
  { name: "Tokyo", latitude: 35.68, longitude: 139.76 },
  { name: "Paris", latitude: 48.85, longitude: 2.35 },
  { name: "London", latitude: 51.51, longitude: -0.13 },
  { name: "Los Angeles", latitude: 34.05, longitude: -118.24 },
  { name: "Sydney", latitude: -33.87, longitude: 151.21 },
  { name: "Mumbai", latitude: 19.07, longitude: 72.87 },
  { name: "São Paulo", latitude: -23.55, longitude: -46.63 },
  { name: "Mexico City", latitude: 19.43, longitude: -99.13 },
  { name: "Beijing", latitude: 39.91, longitude: 116.4 },
  { name: "Moscow", latitude: 55.76, longitude: 37.62 },
  { name: "Istanbul", latitude: 41.01, longitude: 28.98 },
  { name: "Dubai", latitude: 25.2, longitude: 55.27 },
  { name: "Seoul", latitude: 37.57, longitude: 126.98 },
  { name: "Bangkok", latitude: 13.75, longitude: 100.5 },
  { name: "Johannesburg", latitude: -26.2, longitude: 28.04 },
  { name: "Lagos", latitude: 6.52, longitude: 3.38 },
  { name: "Buenos Aires", latitude: -34.61, longitude: -58.38 },
  { name: "Rio de Janeiro", latitude: -22.91, longitude: -43.17 },
  { name: "Jakarta", latitude: -6.21, longitude: 106.85 },
  { name: "Kuala Lumpur", latitude: 3.14, longitude: 101.69 },
  { name: "Toronto", latitude: 43.7, longitude: -79.42 },
  { name: "Vancouver", latitude: 49.28, longitude: -123.12 },
  { name: "San Francisco", latitude: 37.77, longitude: -122.42 },
  { name: "Chicago", latitude: 41.88, longitude: -87.63 },
  { name: "Houston", latitude: 29.76, longitude: -95.37 },
  { name: "Boston", latitude: 42.36, longitude: -71.06 },
  { name: "Atlanta", latitude: 33.75, longitude: -84.39 },
  { name: "Madrid", latitude: 40.42, longitude: -3.7 },
  { name: "Barcelona", latitude: 41.38, longitude: 2.17 },
  { name: "Rome", latitude: 41.9, longitude: 12.49 },
  { name: "Milan", latitude: 45.46, longitude: 9.19 },
  { name: "Athens", latitude: 37.98, longitude: 23.73 },
  { name: "Cairo", latitude: 30.04, longitude: 31.24 },
  { name: "Cape Town", latitude: -33.92, longitude: 18.42 },
  { name: "Lima", latitude: -12.04, longitude: -77.03 },
  { name: "Bogotá", latitude: 4.61, longitude: -74.08 },
  { name: "Hanoi", latitude: 21.02, longitude: 105.84 },
  { name: "Manila", latitude: 14.6, longitude: 120.98 },
  { name: "Riyadh", latitude: 24.71, longitude: 46.68 },
  { name: "Karachi", latitude: 24.86, longitude: 67.01 },
  { name: "Tehran", latitude: 35.69, longitude: 51.39 },
  { name: "Baghdad", latitude: 33.32, longitude: 44.36 },
  { name: "Vienna", latitude: 48.21, longitude: 16.37 },
  { name: "Brussels", latitude: 50.85, longitude: 4.35 },
  { name: "Amsterdam", latitude: 52.37, longitude: 4.89 },
  { name: "Zurich", latitude: 47.38, longitude: 8.54 },
  { name: "Lisbon", latitude: 38.72, longitude: -9.14 },
  { name: "Warsaw", latitude: 52.23, longitude: 21.01 },
  { name: "Stockholm", latitude: 59.33, longitude: 18.07 },
  { name: "Helsinki", latitude: 60.17, longitude: 24.94 },
  { name: "Oslo", latitude: 59.91, longitude: 10.75 },
  { name: "Copenhagen", latitude: 55.68, longitude: 12.57 },
  { name: "Edinburgh", latitude: 55.95, longitude: -3.19 },
  { name: "Glasgow", latitude: 55.86, longitude: -4.25 },
  { name: "Dublin", latitude: 53.35, longitude: -6.26 },
  { name: "Auckland", latitude: -36.85, longitude: 174.76 },
  { name: "Melbourne", latitude: -37.81, longitude: 144.96 },
  { name: "Perth", latitude: -31.95, longitude: 115.86 },
];

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  const addFavorite = (city, weatherData) => {
    const newFavorite = { city, weatherData };
    const updatedFavorites = [...favorites, newFavorite];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-indigo-600 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-8">Global Weather Viewer</h1>
      <SearchComponent
        addFavorite={addFavorite}
        cities={cities}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      <FavoritesComponent favorites={favorites} />
    </div>
  );
};

export default App;
