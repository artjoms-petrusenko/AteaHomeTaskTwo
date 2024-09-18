import { LineChart } from '@mui/x-charts/LineChart';
import { WeatherEntity } from '../../app/models/WeatherEntity';
import { useEffect, useState } from 'react';
import { Header } from 'semantic-ui-react';
import { format } from 'date-fns/format';

interface Props {
  adress: string,
  values: WeatherEntity[]
}

export default function WeatherGraphItem({ adress, values }: Props) {
  const [temperatureList, setTemperatureList] = useState<number[]>([]);
  const [minTemperatureList, setMinTemperatureList] = useState<number[]>([]);
  const [maxTemperatureList, setMaxTemperatureList] = useState<number[]>([]);
  const [dateList, setDateList] = useState<string[]>([]);

  useEffect(() => {
    var newTempList = new Array<number>();
    var newMinTempList = new Array<number>();
    var newMaxTempList = new Array<number>();
    var newDateList = new Array<string>();

    values.forEach(weatherEntity => {
      newTempList.push(weatherEntity.temperature);
      newMinTempList.push(weatherEntity.minTemperature);
      newMaxTempList.push(weatherEntity.maxTemperature);
      newDateList.push(format(weatherEntity.date, 'dd/MM/yyyy HH:mm:ss'));
    });
    
    setTemperatureList(newTempList);
    setMinTemperatureList(newMinTempList);
    setMaxTemperatureList(newMaxTempList);
    setDateList(newDateList);
  }, [])

  return (
    <>
      <Header style={{ textAlign: 'center' }} content={adress} />
      <LineChart
        width={1000}
        height={300}
        series={[
          { data: temperatureList, label: 'Temperature' },
          { data: minTemperatureList, label: 'Min temperature' },
          { data: maxTemperatureList, label: 'Max temperature' }
        ]}
        xAxis={[{ scaleType: 'point', data: dateList }]}
      />
    </>
  );
}