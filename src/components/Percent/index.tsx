import React from 'react';
import { PressableProps } from 'react-native';
import {
  Container,
  IconContainer,
  PercentDescription,
  PercentText,
} from './styles';

import { ArrowUpRight } from 'phosphor-react-native';

import { THEME } from '@themes/theme';

type Props = PressableProps & {
  type: 'primary' | 'secondary';
};

export function Percent({ type = 'primary', ...rest }: Props) {
  return (
    <Container TypeProps={type} {...rest}>
      <IconContainer>
        <ArrowUpRight size={24} weight='bold' color={THEME.COLORS.GREEN_DARK} />
      </IconContainer>
      <PercentText>90,86%</PercentText>
      <PercentDescription>das refeições dentro da dieta</PercentDescription>
    </Container>
  );
}
