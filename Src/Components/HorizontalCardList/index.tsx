import React from "react";
import * as Styled from "./styles";
import FtIcons from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
export interface IDataListHorizontal {
  situationPerHour: string;
  hourly: string;
  icon: string;
}

export interface IHorizontalProps {
  dataHorizontalList: IDataListHorizontal[];
}

export const HorizontalCardList: React.FC<IHorizontalProps> = ({
  dataHorizontalList,
}) => {
  return (
    <Styled.HorizontalList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={dataHorizontalList}
      renderItem={({ item }) => (
        <Styled.Column>
          <Styled.TitleList>{item.hourly}</Styled.TitleList>
          <Styled.IconView>
            <Styled.Icon
              source={{
                uri: `http://openweathermap.org/img/wn/${item.icon}@4x.png`,
              }}
            />
          </Styled.IconView>
        </Styled.Column>
      )}
    />
  );
};
