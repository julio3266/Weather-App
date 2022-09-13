import * as Location from "expo-location";

export const getPermissionLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  let location = await Location.getCurrentPositionAsync({});
  return { status, location };
};

export const reverseGeocoding = async (latitude, longitude) => {
  let result = await Location.reverseGeocodeAsync({
    latitude: -23.559068004737092,
    longitude: -46.655100579820434,
  });
  return result;
};
