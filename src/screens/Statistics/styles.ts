import { Pressable } from 'react-native';
import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { ArrowLeft } from 'phosphor-react-native';

export type HeaderTypeProps = 'positive' | 'negative';

type Props = {
  type: HeaderTypeProps;
};

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View<Props>`
  height: 25%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  background-color: ${({ type, theme }) =>
    type === 'positive' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const BackButton = styled(Pressable)`
  position: absolute;
  top: 24px;
  left: 24px;
`;

export const ArrowLeftIcon = styled(ArrowLeft).attrs<Props>({
  size: 24,
  weight: 'bold',
})``;

export const Percent = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Body = styled.View`
  width: 100%;
  height: 100%;
  margin-top: -20px;
  padding: 0 24px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TitleContainer = styled.View`
  align-items: center;
  padding-top: 32px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-bottom: 24px;
`;

export const StatisticsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StatisticsCardGroup = styled.View`
  width: 48%;
`;
