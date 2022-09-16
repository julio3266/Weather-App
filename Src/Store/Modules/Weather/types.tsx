export interface IWeatherProps {
  currentWeather: ICurrentWeather;
  nextHoursWeather: INextHoursWeather[];
  nextDailyWeather: IDailyWeather[];
}

export interface IDailyWeather {
  dailyName: string;
  tempMin: number;
  tempMax: number;
  situationPerDaily: string;
}

export interface ICurrentWeather {
  currentWeather: number;
  tempMin: number;
  tempMax: number;
  currentSituation: string;
}

export interface INextHoursWeather {
  situationPerHour: string;
  hourly: string;
}
