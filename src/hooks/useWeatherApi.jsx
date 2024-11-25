import { useState } from 'react';
import { LAT_LON_URL, WEATHER_URL, API_KEY } from '../utils/constant';

const useWeatherApi = (updateWeatherData) => {
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function getLatLon(city) {
    try {
      const response = await fetch(`${LAT_LON_URL}${city}&appid=${API_KEY}`);
      const data = await response.json();
      return [data[0].lat, data[0].lon];
    } catch (error) {
      console.error(error);
    }
  }

  async function getWeatherData(city) {
    try {
      setIsLoading(true);
      const [latitude, longitude] = await getLatLon(city);
      const response = await fetch(
        `${WEATHER_URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      const data = await response.json();
      const list = data.list.filter((item) => item.dt_txt.includes('12:00:00'));
      updateWeatherData(list);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  return [city, setCity, isLoading, getWeatherData];
};

export default useWeatherApi;
