import React from "react";
import * as Styled from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import AntIcons from "react-native-vector-icons/AntDesign";
import FaIcons from "react-native-vector-icons/FontAwesome5";

export interface IHorizontalProps {
  temperature?: string;
  situation?: string;
  min?: number;
  max?: number;
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Agora",
    Icon: <Icon name="sunny" size={30} color={"yellow"} />,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "11:00",
    Icon: <Icon name="sunny" size={30} color={"yellow"} />,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "12:00",
    Icon: <AntIcons name="cloud" size={30} color={"white"} />,
  },
  {
    id: "421421421",
    title: "13:00",
    Icon: <AntIcons name="cloud" size={30} color={"white"} />,
  },
  {
    id: "fsaf21421421",
    title: "14:00",
    Icon: <FaIcons name="cloud-moon-rain" size={30} color={"white"} />,
  },
  {
    id: "fsafsar352t32",
    title: "15:00",
    Icon: <FaIcons name="cloud-moon-rain" size={30} color={"white"} />,
  },
  {
    id: "fsafsa5325435432",
    title: "16:00",
    Icon: <Icon name="sunny" size={30} color={"yellow"} />,
  },
  {
    id: "fsafsa5325324532",
    title: "17:00",
    Icon: <Icon name="sunny" size={30} color={"yellow"} />,
  },
  {
    id: "fsafw543654343",
    title: "18:00",
    Icon: <Icon name="cloudy-night-sharp" size={30} color={"#fff"} />,
  },
  {
    id: "5421543654765756",
    title: "19:00",
    Icon: <Icon name="cloudy-night-sharp" size={30} color={"#fff"} />,
  },
  {
    id: "3o24i2390jrwfdsifn",
    title: "20:00",
    Icon: <Icon name="cloudy-night-sharp" size={30} color={"#fff"} />,
  },
  {
    id: "58694a0f-3da1-921i4921u49u12471f-bd96-145571e29d72",
    title: "21:00",
    Icon: <Icon name="cloudy-night-sharp" size={30} color={"#fff"} />,
  },
  {
    id: "58694a0f-3da1-471f-bd96-1455ojeinsdnfsod71e29d72",
    title: "22:00",
    Icon: <Icon name="cloudy-night-sharp" size={30} color={"#fff"} />,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72sfjdsfomfvdsj",
    title: "23:00",
    Icon: <Icon name="cloudy-night-sharp" size={30} color={"#fff"} />,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145fksanfksanfkna571e29d72",
    title: "00:00",
    Icon: <Icon name="cloudy-night-sharp" size={30} color={"#fff"} />,
  },
];

export const HorizontalCardList: React.FC<IHorizontalProps> = () => {
  return (
    <Styled.HorizontalList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={DATA}
      renderItem={({ item }) => (
        <Styled.Column>
          <Styled.TitleList>{item.title}</Styled.TitleList>
          <Styled.Icon>{item.Icon}</Styled.Icon>
        </Styled.Column>
      )}
    />
  );
};
