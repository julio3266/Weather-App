import { Action, Reducer } from "redux";
import * as actions from "./actions";
import { ILocation } from "./types";

export const initialState: ILocation = {
  coordinates: {
    lat: null,
    long: null,
  },
  place: {
    city: null,
    state: null,
  },
  status: null,
};

export const LocationReducer: Reducer<ILocation> = (
  state = initialState,
  action: Action | any
) => {
  switch (action.type) {
    case actions.SET_LOCATION_DATA:
      return {
        ...state,
        coordinates: {
          lat: action.payload.coordinates.lat,
          long: action.payload.coordinates.long,
        },
        place: {
          city: action.payload.place.city,
          state: action.payload.place.state,
        },
        status: action.payload.status,
      };
    default:
      return state;
  }
};
