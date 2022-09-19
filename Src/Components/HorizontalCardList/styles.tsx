import styled from "styled-components/native";

export const HorizontalList = styled.FlatList`
  flex: 1;
  width: 100%;
  max-height: 12%;
  top: 30%;
  background-color: ${({ theme }) => theme.colors.blackTransparence};
  border-radius: 20px;
`;

export const Column = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const TitleList = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.regular}; ;
`;

export const IconView = styled.View``;

export const Icon = styled.Image`
  height: 60px;
  width: 50px;
`;
