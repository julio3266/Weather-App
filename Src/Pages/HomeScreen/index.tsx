import React, { useMemo } from "react";
import Geocoder from "react-native-geocoding";
import { Background } from "../../Components/Background";
import { getPermissionLocation } from "../../Utils/LocationUtils";
import { apiKey } from "../../Config/config";
import * as Styled from "./styles";
import { Header } from "../../Components/Header";
import { HorizontalCardList } from "../../Components/HorizontalCardList";
import { VerticalCardList } from "../../Components/VerticalCardList";

export interface IHomeScreenProps {}

export const HomeScreen: React.FC<IHomeScreenProps> = () => {
  useMemo(() => {
    getPermissionLocation()
      .then((data) => {
        Geocoder.init(apiKey);
        Geocoder.from(
          data.location.coords.latitude,
          data.location.coords.longitude
        ).then((exactLocation) => {});
      })
      .catch((error) => {});
  }, []);

  return (
    <Styled.Container>
      <Background backgroundOfType={"night"} resizeTypeMode={"cover"}>
        <Header />
        <HorizontalCardList />
        <VerticalCardList />
      </Background>
    </Styled.Container>
  );
};
