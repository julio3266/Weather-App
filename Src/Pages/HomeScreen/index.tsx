import React, { useEffect, useMemo, useCallback } from "react";
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
  SetLoadingState,
} from "../../Store/Modules/Weather/actions";
import { Background } from "../../Components/Background";
import { Header } from "../../Components/Header";
import { HorizontalCardList } from "../../Components/HorizontalCardList";
import { VerticalCardList } from "../../Components/VerticalCardList";
import { IReduxState } from "../../Store/types";
import { fetchOpenWeatherCurrentData } from "../../Services/WeatherUtils";
import { LoaderAnimated } from "../../Components/LoaderAnimated";

export interface IHomeScreenProps {}

const renderLoader = (loading) => {
  return <LoaderAnimated loading={loading} />;
};

const renderHomeScreen = (
  place,
  currentWeather,
  tempMax,
  tempMin,
  currentSituation,
  nextHoursWeather,
  nextDailyWeather,
  handleRefreshData
) => {
  return (
    <Styled.Container>
      <Background backgroundOfType={"night"} resizeTypeMode={"cover"}>
        <Header
          refreshData={handleRefreshData}
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
  const { loading } = useSelector(
    (state: IReduxState) => state.weather.isLoading
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

        dispatch(SetLoadingState({ isLoading: { loading: false } }));
      })
      .catch((error) => {});
  }, [coordinates]);

  const handleRefreshData = useCallback(() => {
    dispatch(SetLoadingState({ isLoading: { loading: true } }));

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
        dispatch(SetLoadingState({ isLoading: { loading: false } }));
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      {loading
        ? renderLoader(loading)
        : renderHomeScreen(
            place,
            currentWeather,
            tempMax,
            tempMin,
            currentSituation,
            nextHoursWeather,
            nextDailyWeather,
            handleRefreshData
          )}
    </>
  );
};
