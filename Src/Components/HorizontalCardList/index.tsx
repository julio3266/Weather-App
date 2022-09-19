import React from "react";
import { assignTestId } from "../../utils/qualityAssurance";
import * as Styled from "./styles";

export interface IDataListHorizontal {
  situationPerHour: string;
  hourly: string;
  icon: string;
}

export interface IHorizontalProps {
  testID?: string;
  dataHorizontalList: IDataListHorizontal[];
}

export const HorizontalCardList: React.FC<IHorizontalProps> = ({
  testID = "HorizontalCardList",
  dataHorizontalList,
}) => {
  return (
    <Styled.HorizontalList
      {...assignTestId("View", testID)}
      testID={"container"}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={dataHorizontalList}
      renderItem={({ item, index }) => (
        <Styled.Column {...assignTestId("View", `${testID}_column_${index}`)}>
          <Styled.TitleList
            {...assignTestId("Text", `${testID}_title_${index}`)}
          >
            {item.hourly}
          </Styled.TitleList>
          <Styled.IconView
            {...assignTestId("View", `${testID}_iconView_${index}`)}
          >
            <Styled.Icon
              {...assignTestId("Image", `${testID}_icon_${index}`)}
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
