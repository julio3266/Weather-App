import axios from "axios";
import { weatherApiKey } from "../Config/config";
import {
  ICurrentWeather,
  INextHoursWeather,
} from "../Store/Modules/Weather/types";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const fetchOpenWeatherCurrentData = async (latitude, longitude) => {
  let data = await axios
    .get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&hourly&exclude=minutely&lang=pt_br&units=metric&cnt=4&appid=${weatherApiKey}`
    )
    .then((weather: any) => {
      const { weatherPerHour } = parsedWeatherDataPerHour(weather);
      const { weatherPerDaily } = parsedWeatherPerDay(weather.data.daily);
      let weatherData: ICurrentWeather = {
        currentSituation: weather.data?.current?.weather?.[0]?.description,
        currentWeather: weather?.data?.current?.temp?.toFixed(0),
        tempMax: weather?.data?.daily?.[0]?.temp?.max?.toFixed(0),
        tempMin: weather.data.daily?.[0]?.temp?.min?.toFixed(0),
      };

      return { weatherData, weatherPerHour, weatherPerDaily };
    })
    .catch((error) => {});
  return data;
};

export const parsedWeatherDataPerHour = (weatherHourData) => {
  let weatherPerHour: INextHoursWeather = weatherHourData.data.hourly
    .slice(1, 13)
    .map((manyWeather) => {
      let parsedUnixTime = format(new Date(manyWeather.dt * 1000), "kk:mm", {
        locale: ptBR,
      });
      let parsed = {
        hourly: parsedUnixTime,
        situationPerHour: manyWeather.weather?.[0]?.description,
        icon: manyWeather.weather?.[0]?.icon,
      };

      return parsed;
    });
  return { weatherPerHour };
};

const parsedWeatherPerDay = (weatherPerDay) => {
  let weatherPerDaily = weatherPerDay.slice(1, 8).map((dailyData) => {
    let parsedUnixWeekDay = format(new Date(dailyData.dt * 1000), "eeee", {
      locale: ptBR,
    });

    let parsed = {
      dailyName: parsedUnixWeekDay,
      tempMin: dailyData.temp.min.toFixed(0),
      tempMax: dailyData.temp.max.toFixed(0),
      situationPerDaily: dailyData.weather?.[0].description,
      icon: dailyData.weather?.[0]?.icon,
    };

    return parsed;
  });
  return { weatherPerDaily };
};
