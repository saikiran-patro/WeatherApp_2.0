import React, { useEffect } from 'react';
import Spinner from './Spinner';
import useWeatherApi from '../hooks/useWeatherApi';

const Search = ({ updateWeatherData }) => {
  const [city, setCity, isLoading, getWeatherData] = useWeatherApi(updateWeatherData);
   useEffect(()=>{
     // default weather

     getWeatherData('Vizag')
   },[])
  return (
    <div className="searchContainer">
      <h1>Weather in your city</h1>
      <div className="searchBarContainer">
        <input
          className="searchBox"
          type="text"
          placeholder="Enter city name"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button onClick={() =>{ 
            city.length? getWeatherData(city) : alert("Please enter city")}} className="searchBtn">
          Search
        </button>
        {isLoading && <Spinner />}
      </div>
    </div>
  );
};

export default Search;
