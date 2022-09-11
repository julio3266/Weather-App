import { Action, ActionCreator } from "redux";
import { ILocation } from "./types";

export const GET_LOCATION_DATA = "GET_PERMISSION_LOCATION_STATUS";
export const GetPermissionLocationStatus: ActionCreator<Action> = (
  payload: ILocation
) => ({
  type: GET_LOCATION_DATA,
  payload,
});
