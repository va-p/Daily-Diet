import styled, { css } from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { Pressable } from 'react-native';

export type HeaderTypeProps =
  | 'primary'
  | 'secondary_positive'
  | 'secondary_negative';

type Props = {
  type: HeaderTypeProps;
};

export const Container = styled.View<Props>`
  flex-direction: row;
  min-height: 132px;
  justify-content: center;
  align-items: center;
  padding: 24px;
  ${({ type }) =>
    type === 'primary' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    `}
  ${({ type }) =>
    type === 'secondary_positive' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    `}
    ${({ type }) =>
    type === 'secondary_negative' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
    `}
`;

export const BackButton = styled(Pressable)`
  position: absolute;
  left: 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
