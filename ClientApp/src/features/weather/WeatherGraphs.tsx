import { WeatherEntity } from '../../app/models/WeatherEntity';
import agent from '../../app/api/agent';
import { useEffect, useState } from 'react';
import WeatherGraphItem from './WeatherGraphItem';

export default function WeatherGraphs() {
  const [sortedWeatherEntities, setSortedWeatherEntities] = useState(new Array<{ adress: string, values: WeatherEntity[] }>());

  const getWeatherList = async () => {
    const downloadedWeatherList = await agent.appApiAgent.getWeatherList();

    if (downloadedWeatherList !== undefined) {
      downloadedWeatherList.sort((a, b) => {
        return b.date.valueOf() - a.date.valueOf();
      });

      var adreses: Set<string> = new Set();
      downloadedWeatherList.forEach(weatherEntity => {
        adreses.add(weatherEntity.adress);
      });

      const newSortedWeatherEntities = new Array<{ adress: string, values: WeatherEntity[] }>();
      adreses.forEach(adress => {
        var values = downloadedWeatherList.filter(weatherEntity => weatherEntity.adress === adress)
        newSortedWeatherEntities.push({ adress: adress, values: values });
      })

      setSortedWeatherEntities(newSortedWeatherEntities);
    }
  }

  useEffect(() => {
    getWeatherList();
  }, [])

  return (
    <>
      {sortedWeatherEntities.map(({ adress, values }) => (
        <WeatherGraphItem adress={adress} values={values} key={adress} />
      ))}
    </>
  );
}