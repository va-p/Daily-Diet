import styled, { css } from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export type StatisticCardTypeProps = 'neutral' | 'positive' | 'negative';

type Props = {
  type: StatisticCardTypeProps;
};

export const Container = styled.View<Props>`
  width: 100%;
  min-height: 89px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-bottom: 12px;
  border-radius: 8px;
  ${({ type }) =>
    type === 'neutral' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    `}
  ${({ type }) =>
    type === 'positive' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    `}
    ${({ type }) =>
    type === 'negative' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
    `}
`;

export const Count = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(24)}px;
  padding-bottom: 8px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(14)}px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;
