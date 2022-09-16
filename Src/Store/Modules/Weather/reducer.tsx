import { Action, Reducer } from "redux";
import { IWeatherProps } from "./types";
import * as actions from "./actions";

export const initialState: IWeatherProps = {
  currentWeather: {
    currentWeather: 0,
    tempMax: 0,
    tempMin: 0,
    currentSituation: "",
  },
  nextHoursWeather: [
    {
      hourly: null,
      situationPerHour: null,
      icon: null,
    },
  ],
  nextDailyWeather: [
    {
      dailyName: null,
      tempMin: null,
      tempMax: null,
      situationPerDaily: null,
      icon: null,
    },
  ],
};

export const WeatherReducer: Reducer<IWeatherProps> = (
  state = initialState,
  action: Action | any
) => {
  switch (action.type) {
    case actions.SET_CURRENT_WEATHER_DATA:
      return {
        ...state,
        currentWeather: {
          tempMax: action?.payload?.currentWeather?.tempMax,
          tempMin: action?.payload?.currentWeather?.tempMax,
          currentWeather: action.payload.currentWeather.currentWeather,
          currentSituation: action.payload.currentWeather.currentSituation,
        },
      };
    case actions.SET_WEATHER_PER_HOUR:
      return {
        ...state,
        nextHoursWeather: [...action.payload.nextHoursWeather],
      };
    case actions.SET_WEATHER_PER_DAILY:
      return {
        ...state,
        nextDailyWeather: [...action.payload.nextDailyWeather],
      };
    default:
      return state;
  }
};
