import { combineReducers, legacy_createStore as createStore } from "redux";
import { LocationReducer } from "./Modules/Location/reducer";
import { WeatherReducer } from "./Modules/Weather/reducer";
import { IReduxState } from "./types";

const rootReducer = combineReducers<IReduxState>({
  location: LocationReducer,
  weather: WeatherReducer,
});

export const store = createStore(rootReducer);

export default store;
