import axios from "axios";
import { WeatherEntity } from "../models/WeatherEntity";

const baseUrl = "http://localhost:3000/api/";
const createWeatherApiEndpoint = "create";
const getWeatherListApiEndpoint = "getlist";

const saveWeatherAppApiData = async (weatherEntity: WeatherEntity) => {
  try {
    const response = await axios.post(baseUrl + createWeatherApiEndpoint, weatherEntity);
    if (response.status === 200) {
      return weatherEntity;
    }
  } catch (error) {
    console.error(error);
  }
};

const getAppApiWeatherList = async () => {
  try {
    const response = await axios.get(baseUrl + getWeatherListApiEndpoint);
    if (response.status === 200) {
      return response.data as WeatherEntity[];
    }
  } catch (error) {
    console.error(error);
  }
}

const appApiAgent = {
  createWeather: saveWeatherAppApiData,
  getWeatherList: getAppApiWeatherList
}

export default appApiAgent