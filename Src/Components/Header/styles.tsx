import styled from "styled-components/native";

export const Container = styled.View`
  top: 10%;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 60px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const SubTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const SecondarySubTitle = styled.Text`
  font-size: 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
