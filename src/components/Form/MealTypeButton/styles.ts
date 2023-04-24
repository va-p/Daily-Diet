import styled, { css } from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
  mealIsInTheDiet: boolean;
  isActive: boolean;
};

export const Container = styled.Pressable<Props>`
  width: 100%;
  min-height: 48px;
  max-height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 6px;

  ${({ isActive }) =>
    !isActive &&
    css`
      background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    `}

  ${({ isActive, mealIsInTheDiet }) =>
    isActive &&
    mealIsInTheDiet &&
    css`
      background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
      border: 1px solid ${({ theme }) => theme.COLORS.GREEN_DARK};
    `}

  ${({ isActive, mealIsInTheDiet }) =>
    isActive &&
    !mealIsInTheDiet &&
    css`
      background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
      border: 1px solid ${({ theme }) => theme.COLORS.RED_DARK};
    `}
`;

export const Status = styled.View<Props>`
  min-width: 8px;
  max-width: 8px;
  min-height: 8px;
  max-height: 8px;
  border-radius: 4px;
  background-color: ${({ mealIsInTheDiet, theme }) =>
    mealIsInTheDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
