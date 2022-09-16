import styled from "styled-components/native";

export const HorizontalList = styled.FlatList`
  width: 100%;
  max-height: 100px;
  top: 30%;
  background-color: ${({ theme }) => theme.colors.blackTransparence};
  border-radius: 20px;
`;

export const Column = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TitleList = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  padding: 5px;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.regular}; ;
`;

export const IconView = styled.View``;

export const Icon = styled.Image`
  height: 60px;
  width: 50px;
`;
