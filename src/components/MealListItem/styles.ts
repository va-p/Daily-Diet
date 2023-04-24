import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export type MealWithinTheDiet = boolean;

type Props = {
  mealIsInTheDiet: MealWithinTheDiet;
};

export const Container = styled.Pressable`
  width: 100%;
  min-height: 48px;
  max-height: 48px;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  margin-bottom: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`;

export const TimeContainer = styled.View`
  min-width: 15%;
  max-width: 15%;
  padding-right: 8px;
`;

export const Time = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(12)}px;
`;

export const Divider = styled.View`
  min-width: 1px;
  max-width: 1px;
  min-height: 14px;
  max-height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const NameAndStatusContainer = styled.View`
  flex-direction: row;
  min-width: 85%;
  max-width: 85%;
  align-items: center;
  justify-content: space-between;
  padding-left: 8px;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
})`
  max-width: 80%;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(16)}px;
`;

export const Status = styled.View<Props>`
  width: 14px;
  height: 14px;
  background-color: ${({ theme, mealIsInTheDiet }) =>
    mealIsInTheDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  border-radius: 7px;
`;
