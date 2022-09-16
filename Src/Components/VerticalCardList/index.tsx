import React from "react";
import * as Styled from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import AntIcons from "react-native-vector-icons/AntDesign";
import FaIcons from "react-native-vector-icons/FontAwesome5";
import { ListSubtitleSecondary } from "./styles";

export interface IVerticalListProps {
  dailyName: string;
  tempMin: number;
  tempMax: number;
  situationPerDaily: string;
}
export interface IVerticalCardList {
  IVerticalListData: IVerticalListProps[];
}

export const VerticalCardList: React.FC<IVerticalCardList> = ({
  IVerticalListData,
}) => {
  return (
    <Styled.Container>
      <Styled.List
        data={IVerticalListData}
        ListHeaderComponent={() => (
          <Styled.ListTitle>Previsão para 7 dias</Styled.ListTitle>
        )}
        renderItem={({ item }) => (
          <Styled.Row>
            <Styled.ListSubtitle>{item.dailyName}</Styled.ListSubtitle>
            <Styled.ListSubtitleSecondary>
              <Icon name="cloud" size={30} color={"#fff"} />
            </Styled.ListSubtitleSecondary>
            <Styled.ListSubtitleSecondary>
              {item.tempMin}
            </Styled.ListSubtitleSecondary>
            <Styled.ListSubtitleSecondary>
              {item.tempMax}
            </Styled.ListSubtitleSecondary>
          </Styled.Row>
        )}
      />
    </Styled.Container>
  );
};
