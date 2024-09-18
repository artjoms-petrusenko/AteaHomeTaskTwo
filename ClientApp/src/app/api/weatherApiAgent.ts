import axios from "axios";
import { WeatherEntity } from "../models/WeatherEntity";
import { v4 as generateGuid } from 'uuid';

const generateWeatherApiUrl = (place: string) => {
  const weatherApiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}/today?unitGroup=metric&include=days&contentType=json&key=`;
  const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
  return weatherApiUrl + weatherApiKey;
}

const fetchWeatherApiData = async (place: string) => {
  try {
    const response = await axios.get(generateWeatherApiUrl(place));
    if (response.status === 200) {
      const weatherEntity: WeatherEntity = {
        id: generateGuid(),
        adress: response.data["address"],
        timeZone: response.data["timezone"],
        date: new Date(),
        temperature: response.data["days"][0]["temp"],
        maxTemperature: response.data["days"][0]["tempmax"],
        minTemperature: response.data["days"][0]["tempmin"]
      }
      return weatherEntity;
    }
  } catch (error) {
    console.error(error);
  }
};

const weatherApiAgent = {
  getWeather: fetchWeatherApiData
}

export default weatherApiAgent;