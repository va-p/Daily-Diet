import { PressableProps } from 'react-native';
import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

type DateTimeButtonComponent = PressableProps;

export const Container = styled.View`
  flex: 1;
`;

export const Form = styled.View`
  flex: 1;
  padding: 24px;
  margin-top: -20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const InputRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DateTimeInputGroup = styled.View`
  min-width: 46%;
  max-width: 46%;
`;

export const MealTypeButtonGroup = styled.View`
  min-width: 48%;
  max-width: 48%;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(14)}px;
  margin-bottom: 8px
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const DateTimeButton = styled.Pressable<DateTimeButtonComponent>`
  width: 100%;
  min-height: 48px;
  max-height: 48px;
  padding-left: 16px;
  margin-bottom: 40px;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`;

export const DateTimeButtonText = styled.Text``;

export const Footer = styled.View`
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
