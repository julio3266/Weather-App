import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Styled from "./styles";
import {
  getPermissionLocation,
  reverseGeocoding,
} from "../../Utils/LocationUtils";
import { SetPermissionLocationStatus } from "../../Store/Modules/Location/actions";
import { Background } from "../../Components/Background";
import { Header } from "../../Components/Header";
import { HorizontalCardList } from "../../Components/HorizontalCardList";
import { VerticalCardList } from "../../Components/VerticalCardList";
import { ILocation } from "../../Store/Modules/Location/types";

export interface IHomeScreenProps {}

export const HomeScreen: React.FC<IHomeScreenProps> = () => {
  const dispatch = useDispatch();
  const { coordinates, status, place } = useSelector(
    (state: ILocation) => state
  );

  useMemo(() => {
    getPermissionLocation()
      .then((coordinatesData) => {
        reverseGeocoding(
          coordinatesData.location.coords.latitude,
          coordinatesData.location.coords.longitude
        ).then((exactLocation) => {
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
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Styled.Container>
      <Background backgroundOfType={"night"} resizeTypeMode={"cover"}>
        <Header city={place.city} state={place.state} />
        <HorizontalCardList />
        <VerticalCardList />
      </Background>
    </Styled.Container>
  );
};
