import { ILocation } from "./Modules/Location/types";
import { IWeatherProps } from "./Modules/Weather/types";

export interface IReduxState {
  location: ILocation;
  weather: IWeatherProps;
}
