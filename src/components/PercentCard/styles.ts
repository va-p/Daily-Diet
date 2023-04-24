import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { ArrowUpRight } from 'phosphor-react-native';

export type TypeProps = 'positive' | 'negative';

type Props = {
  type: TypeProps;
};

export const Container = styled.Pressable<Props>`
  width: ${RFValue(300)}px;
  height: ${RFValue(102)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ type, theme }) =>
    type === 'positive' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: ${RFValue(8)}px;
`;

export const IconContainer = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const ArrowUp = styled(ArrowUpRight).attrs({
  size: 24,
  weight: 'bold',
})``;

export const PercentText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const PercentDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;
