import React, { useState } from 'react';
import Search from './Search';
import Shimmer from './Shimmer';
import Info from './Info';

const Container = () => {
  const [weatherData, setWeatherData] = useState([]);

  function updateWeatherData(weatherData) {
    setWeatherData(weatherData);
  }

  return (
    <div>
      <Search updateWeatherData={updateWeatherData} />
      {weatherData.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="infoContainer">
          {weatherData.map((element, index) => (
            <Info
              key={index}
              date={element.dt_txt?.slice(0, 10).split('-').reverse().join('-')}
              minTemp={element.main.temp_min}
              maxTemp={element.main.temp_max}
              pressure={element.main.pressure}
              humidity={element.main.humidity}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Container;
