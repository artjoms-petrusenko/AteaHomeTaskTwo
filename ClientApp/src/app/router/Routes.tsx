import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";
import WeatherRequestList from "../../features/weather/WeatherRequestList";
import WeatherList from "../../features/weather/WeatherList";
import WeatherGraphs from "../../features/weather/WeatherGraphs";

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'weather', element: <WeatherRequestList /> },
      { path: 'weatherlist', element: <WeatherList /> },
      { path: 'graphs', element: <WeatherGraphs /> }
    ]
  }
]

export const router = createBrowserRouter(routes);