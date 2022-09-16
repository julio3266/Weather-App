import styled from "styled-components/native";

export const Container = styled.View`
  top: 17%;
  width: 100%;
  height: 40%;
  max-height: 40%;
  background-color: ${({ theme }) => theme.colors.blackTransparence};
  border-radius: 20px;
`;

export const List = styled.FlatList`
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ListTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 20px;
  padding: 6%;
`;

export const ListSubtitle = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 20px;
  width: 39.3%;
  padding: 2%;
  font-weight: 500;
`;

export const ListSubtitleSecondary = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 500;
`;

export const Icon = styled.Image`
  width: 50px;
  height: 50px;
`;
