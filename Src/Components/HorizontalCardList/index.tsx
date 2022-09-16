import React from "react";
import * as Styled from "./styles";
import FtIcons from "react-native-vector-icons/FontAwesome";

export interface IDataListHorizontal {
  situationPerHour: string;
  hourly: string;
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
          <Styled.Icon>
            <FtIcons name="cloud" size={30} color={"#fff"} />
          </Styled.Icon>
        </Styled.Column>
      )}
    />
  );
};
