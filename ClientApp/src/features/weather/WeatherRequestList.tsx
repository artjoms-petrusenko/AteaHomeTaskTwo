import { Button } from "semantic-ui-react"
import WeatherItem from "./WeatherItem"
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { WeatherEntity } from "../../app/models/WeatherEntity";

export default function WeatherRequestList() {
  const [weatherList, setWeatherList] = useState<WeatherEntity[]>([]);
  const [ticking, setTicking] = useState(false)
  const [count, setCount] = useState(0)

  const placeList = ["Riga,Latvia", "Daugavpils,Latvia", "Vilnius, Lithuania", "Kaunas, Lithuania", "Tallinn,Estonia", "Tartu, Estonia"]

  const addWeatherToList = (weatherEntity: WeatherEntity) => {
    setWeatherList((prevValues) =>
      [...prevValues, weatherEntity]
    );
  };

  useEffect(() => {
    if (!ticking) return
    const timer = setTimeout(() => ticking && setCount(count + 1), 60000)
    placeList.forEach(place => {
      agent.weatherApiAgent.getWeather(place).then(weatherEntity => {
        if (weatherEntity !== undefined) {
          addWeatherToList(weatherEntity);
          agent.appApiAgent.createWeather(weatherEntity);
        }
      })
    });
    return () => clearTimeout(timer)
  }, [count, ticking])

  return (
    <>
      <Button disabled={ticking} content='Start fetching' color='green' onClick={() => setTicking(true)} />
      <Button disabled={!ticking} content='Stop fetching' color='red' onClick={() => setTicking(false)} />

      {weatherList.map(weatherEntity => (
        <WeatherItem weatherEntity={weatherEntity} key={weatherEntity.id} />
      ))}
    </>
  )
}