import React from "react";
import { assignTestId } from "../../utils/qualityAssurance";
import * as Styled from "./styles";

export interface IVerticalListProps {
  dailyName: string;
  tempMin: number;
  tempMax: number;
  situationPerDaily: string;
  icon: string;
}
export interface IVerticalCardList {
  testID?: string;
  IVerticalListData: IVerticalListProps[];
}

export const VerticalCardList: React.FC<IVerticalCardList> = ({
  testID = "VerticalCardList",
  IVerticalListData,
}) => {
  return (
    <Styled.Container {...assignTestId("View", testID)}>
      <Styled.List
        {...assignTestId("View", `${testID}_list`)}
        data={IVerticalListData}
        ListHeaderComponent={() => (
          <Styled.ListTitle {...assignTestId("Text", `${testID}_title`)}>
            Previsão para 7 dias
          </Styled.ListTitle>
        )}
        renderItem={({ item, index }) => (
          <Styled.Row>
            <Styled.ListSubtitle
              {...assignTestId("Text", `${testID}_subTitle_${index}`)}
            >
              {item.dailyName}
            </Styled.ListSubtitle>
            <Styled.ListSubtitleSecondary
              {...assignTestId("Text", `${testID}_subTitleSecondary_${index}`)}
            >
              <Styled.Icon
                {...assignTestId("Image", `${testID}_icon_${index}`)}
                source={{
                  uri: `http://openweathermap.org/img/wn/${item.icon}@4x.png`,
                }}
              />
            </Styled.ListSubtitleSecondary>
            <Styled.ListSubtitleSecondary
              {...assignTestId("Text", `${testID}_subTitleSecondary_${index}`)}
            >
              {item.tempMin}
            </Styled.ListSubtitleSecondary>
            <Styled.ListSubtitleSecondary
              {...assignTestId("Text", `${testID}_subTitleSecondary_${index}`)}
            >
              {item.tempMax}
            </Styled.ListSubtitleSecondary>
          </Styled.Row>
        )}
      />
    </Styled.Container>
  );
};
