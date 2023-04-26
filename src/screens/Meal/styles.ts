import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
  mealIsInTheDiet: boolean;
};

export const Container = styled.View`
  flex: 1;
`;

export const MealConteiner = styled.View`
  flex: 1;
  gap: 8px;
  padding: 24px;
  margin-top: -20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(14)}px;
  margin-top: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Tag = styled.View`
  flex-direction: row;
  max-width: 144px;
  height: 32px;
  gap: 8px;
  margin-top: 24px;
  align-items: center;
  padding-left: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 100px;
`;

export const Status = styled.View<Props>`
  width: 8px;
  height: 8px;
  background-color: ${({ type, theme }) =>
    type ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 4px;
`;

export const TagTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(14)}px;
`;

export const Footer = styled.View`
  gap: 8px;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
