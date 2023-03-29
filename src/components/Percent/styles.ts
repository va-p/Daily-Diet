import styled from 'styled-components/native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export type TypeProps = 'primary' | 'secondary';

export const Container = styled.Pressable<TypeProps>`
  width: ${RFValue(300)}px;
  height: ${RFValue(102)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, TypeProps }) =>
    TypeProps === 'primary'
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  border-radius: ${RFValue(8)}px;
`;

export const IconContainer = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
`;

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
