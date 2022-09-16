import * as Location from "expo-location";

export const getPermissionLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  let location = await Location.getCurrentPositionAsync({});
  return { status, location };
};

export const reverseGeocoding = async (latitude, longitude) => {
  let result = await Location.reverseGeocodeAsync({
    latitude: latitude,
    longitude: longitude,
  });
  return result;
};
