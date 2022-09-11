import * as Location from "expo-location";

export const getPermissionLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  let location = await Location.getCurrentPositionAsync();
  return { status, location };
};
