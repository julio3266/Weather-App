import { Action, Reducer } from "redux";
import * as actions from "./actions";
import { ILocation } from "./types";

export const initialState: ILocation = {
  coordinates: {
    lat: null,
    long: null,
  },
  status: null,
};

export const LocationReducer: Reducer<ILocation> = (
  state = initialState,
  action: Action | any
) => {
  switch (action.type) {
    case actions.GET_LOCATION_DATA:
      return {
        ...state,
        coordinates: {
          lat: action.payload.coordinates.lat,
          long: action.payload.coordinates.long,
        },
        status: action.payload.coordinates.status,
      };
    default:
      return state;
  }
};
