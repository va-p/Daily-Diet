import { THEME } from '@themes/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 0 32px;
`;

export const ContainerProfileImage = styled.View`
  min-width: 40px;
  max-width: 40px;
  min-height: 40px;
  max-height: 40px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 20px;
`;

export const ProfileImage = styled.Image`
  width: 100%;
  height: 100px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(16)}px;
  padding-top: 40px;
  padding-bottom: 8px;
`;

export const MealsContainer = styled.View`
  flex: 1
  padding-top: 40px;
`;

export const SectionHeader = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => THEME.COLORS.GRAY_100};
`;
