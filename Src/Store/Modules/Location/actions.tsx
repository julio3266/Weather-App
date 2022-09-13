import { Action, ActionCreator } from "redux";
import { ILocation } from "./types";

export const SET_LOCATION_DATA = "GET_PERMISSION_LOCATION_STATUS";
export const SetPermissionLocationStatus: ActionCreator<Action> = (
  payload: ILocation
) => ({
  type: SET_LOCATION_DATA,
  payload,
});
