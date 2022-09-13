import React from "react";
import * as Styled from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import AntIcons from "react-native-vector-icons/AntDesign";
import FaIcons from "react-native-vector-icons/FontAwesome5";
import { ListSubtitleSecondary } from "./styles";

export interface IVerticalCardList {
  time?: string;
  situation?: string;
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Segunda-feira",
    Icon: <Icon name="sunny" size={30} color={"yellow"} />,
    min: 22,
    max: 24,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Terça-feira",
    Icon: <Icon name="sunny" size={30} color={"yellow"} />,
    min: 22,
    max: 24,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Quarta-Feira",
    Icon: <AntIcons name="cloud" size={30} color={"white"} />,
    min: 22,
    max: 24,
  },
  {
    id: "421421421",
    title: "Quinta-Feira",
    Icon: <AntIcons name="cloud" size={30} color={"white"} />,
    min: 22,
    max: 24,
  },
  {
    id: "fsaf21421421",
    title: "Sexta-Feira",
    Icon: <FaIcons name="cloud-moon-rain" size={30} color={"white"} />,
    min: 22,
    max: 24,
  },
  {
    id: "fsafsar352t32",
    title: "Sábado",
    Icon: <FaIcons name="cloud-moon-rain" size={30} color={"white"} />,
    min: 22,
    max: 24,
  },
  {
    id: "fsafsa5325435432",
    title: "Domingo",
    Icon: <Icon name="sunny" size={30} color={"yellow"} />,
    min: 22,
    max: 24,
  },
];

export const VerticalCardList: React.FC<IVerticalCardList> = () => {
  return (
    <Styled.Container>
      <Styled.List
        data={DATA}
        ListHeaderComponent={() => (
          <Styled.ListTitle>Previsão para X dias</Styled.ListTitle>
        )}
        renderItem={({ item }) => (
          <Styled.Row>
            <Styled.ListSubtitle>{item.title}</Styled.ListSubtitle>
            <Styled.ListSubtitleSecondary>
              {item.Icon}
            </Styled.ListSubtitleSecondary>
            <Styled.ListSubtitleSecondary>
              {item.min}
            </Styled.ListSubtitleSecondary>
            <Styled.ListSubtitleSecondary>
              {item.max}
            </Styled.ListSubtitleSecondary>
          </Styled.Row>
        )}
      />
    </Styled.Container>
  );
};
