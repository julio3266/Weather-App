import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Styled from "./styles";
import {
  getPermissionLocation,
  reverseGeocoding,
} from "../../Services/LocationUtils";
import { SetPermissionLocationStatus } from "../../Store/Modules/Location/actions";
import {
  SetCurrentWeatherData,
  SetWeatherPerHour,
  SetWeatherPerDaily,
} from "../../Store/Modules/Weather/actions";
import { Background } from "../../Components/Background";
import { Header } from "../../Components/Header";
import { HorizontalCardList } from "../../Components/HorizontalCardList";
import { VerticalCardList } from "../../Components/VerticalCardList";
import { IReduxState } from "../../Store/types";
import { fetchOpenWeatherCurrentData } from "../../Services/WeatherUtils";

export interface IHomeScreenProps {}

export const HomeScreen: React.FC<IHomeScreenProps> = () => {
  const dispatch = useDispatch();
  const { coordinates, place } = useSelector(
    (state: IReduxState) => state.location
  );
  const { currentSituation, currentWeather, tempMax, tempMin } = useSelector(
    (state: IReduxState) => state.weather.currentWeather
  );
  const { nextHoursWeather, nextDailyWeather } = useSelector(
    (state: IReduxState) => state.weather
  );

  useEffect(() => {
    getPermissionLocation()
      .then((coordinatesData) => {
        reverseGeocoding(
          coordinatesData?.location?.coords?.latitude,
          coordinatesData?.location?.coords?.longitude
        )
          .then((exactLocation) => {
            setPermissionLocationStatus(coordinatesData, exactLocation);
          })
          .catch((error) => {});
      })
      .catch((error) => {});
  }, []);

  const setPermissionLocationStatus = (coordinatesData, exactLocation) => {
    dispatch(
      SetPermissionLocationStatus({
        coordinates: {
          lat: coordinatesData?.location?.coords?.latitude,
          long: coordinatesData.location.coords.longitude,
        },
        place: {
          city: exactLocation?.[0]?.subregion,
          state: exactLocation?.[0]?.district,
        },
        status: coordinatesData?.status,
      })
    );
  };

  useMemo(() => {
    fetchOpenWeatherCurrentData(coordinates?.lat, coordinates?.long)
      .then((weather: any) => {
        dispatch(
          SetCurrentWeatherData({ currentWeather: weather?.weatherData })
        );
        dispatch(
          SetWeatherPerHour({ nextHoursWeather: weather.weatherPerHour })
        );
        dispatch(
          SetWeatherPerDaily({ nextDailyWeather: weather.weatherPerDaily })
        );
      })
      .catch((error) => {});
  }, [coordinates]);

  return (
    <Styled.Container>
      <Background backgroundOfType={"night"} resizeTypeMode={"cover"}>
        <Header
          city={place?.city}
          state={place?.state}
          temperature={currentWeather}
          max={tempMax}
          min={tempMin}
          situation={currentSituation}
        />
        <HorizontalCardList dataHorizontalList={nextHoursWeather} />
        <VerticalCardList IVerticalListData={nextDailyWeather} />
      </Background>
    </Styled.Container>
  );
};
