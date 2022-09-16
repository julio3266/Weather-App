import { ActionCreator, Action } from "redux";
import {
  ICurrentWeather,
  INextHoursWeather,
  IDailyWeather,
  ILoading,
} from "./types";

export const SET_CURRENT_WEATHER_DATA = "SET_CURRENT_WEATHER_DATA";
export const SetCurrentWeatherData: ActionCreator<Action> = (
  payload: ICurrentWeather
) => ({
  type: SET_CURRENT_WEATHER_DATA,
  payload,
});

export const SET_WEATHER_PER_HOUR = "SET_WEATHER_PER_HOUR";
export const SetWeatherPerHour: ActionCreator<Action> = (
  payload: INextHoursWeather[]
) => ({
  type: SET_WEATHER_PER_HOUR,
  payload,
});

export const SET_WEATHER_PER_DAILY = "SET_WEATHER_PER_DAILY";
export const SetWeatherPerDaily: ActionCreator<Action> = (
  payload: IDailyWeather
) => ({
  type: SET_WEATHER_PER_DAILY,
  payload,
});

export const SET_LOADING_STATE = "SET_LOADING_STATE";
export const SetLoadingState: ActionCreator<Action> = (payload: ILoading) => ({
  type: SET_LOADING_STATE,
  payload,
});
