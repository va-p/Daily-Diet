import React from 'react';
import { BackButton, Container, HeaderTypeProps, Title } from './styles';

import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'phosphor-react-native';
import { THEME } from '@themes/theme';

type Props = {
  type: HeaderTypeProps;
  title: string;
};

export function Header({ type, title }: Props) {
  const navigation = useNavigation();
  return (
    <Container type={type}>
      <BackButton onPress={() => navigation.goBack()}>
        <ArrowLeft size={24} weight='bold' color={THEME.COLORS.GRAY_200} />
      </BackButton>

      <Title>{title}</Title>
    </Container>
  );
}
