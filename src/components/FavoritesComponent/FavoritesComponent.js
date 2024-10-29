import React from 'react';

const FavoritesComponent = ({ favorites }) => (
  <div className="max-w-lg w-full mx-auto mt-6 p-6 bg-white text-gray-700 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Favorite Cities</h2>
    {favorites.length > 0 ? (
      favorites.map((favorite, index) => (
        <div
          key={index}
          className="p-4 border-b last:border-none flex justify-between items-center"
        >
          <div>
            <p className="text-lg">{favorite.city}</p>
            <p>Temperature: {favorite.weatherData.temperature}°C</p>
          </div>
          <button
            onClick={() => favorites.splice(index, 1)}
            className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Remove
          </button>
        </div>
      ))
    ) : (
      <p className="text-gray-500">No favorite cities added yet.</p>
    )}
  </div>
);

export default FavoritesComponent;
