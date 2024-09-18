import { Icon, Item, Segment } from "semantic-ui-react";
import { WeatherEntity } from "../../app/models/WeatherEntity";
import { format } from 'date-fns';


interface Props {
  weatherEntity: WeatherEntity
}

export default function WeatherItem({ weatherEntity }: Props) {
  return (
    <Segment>
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header>
              Adress: {weatherEntity.adress} - Timezone: {weatherEntity.timeZone}
            </Item.Header>
            <Item.Description>
              {format(weatherEntity.date, 'dd/MM/yyyy HH:mm:ss')}
            </Item.Description>
            <Item.Extra>
              <Icon name='sun' />Temperature: {weatherEntity.temperature}&ensp;
              Max temperature: {weatherEntity.maxTemperature}&ensp;
              Min temperature: {weatherEntity.minTemperature}
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  )
}