import { Button, Header } from "semantic-ui-react"
import WeatherItem from "./WeatherItem"
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { WeatherEntity } from "../../app/models/WeatherEntity";

export default function WeatherList() {
  const [weatherList, setWeatherList] = useState<WeatherEntity[]>([]);

  const refreshWeatherList = async () => {
    setWeatherList([]);
    const downloadedWeatherList = await agent.appApiAgent.getWeatherList();
    if (downloadedWeatherList !== undefined) {
      setWeatherList(downloadedWeatherList);
    }
  }

  useEffect(() => {
    refreshWeatherList();
  }, [])

  return (
    <>
      <Button content='Refresh' color='green' onClick={() => refreshWeatherList()} />

      {weatherList.length === 0 ? <Header content='Nothing to show' /> : (
        weatherList.map(weatherEntity => (
          <WeatherItem weatherEntity={weatherEntity} key={weatherEntity.id} />
        ))
      )}
    </>
  )
}