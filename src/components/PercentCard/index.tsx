import React from 'react';
import { PressableProps } from 'react-native';
import {
  Container,
  IconContainer,
  ArrowUp,
  PercentDescription,
  PercentText,
  TypeProps,
} from './styles';
import { THEME } from '@themes/theme';

type Props = PressableProps & {
  type: TypeProps;
  percent: string;
};

export function PercentCard({ type, percent, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <IconContainer>
        <ArrowUp
          type={'positive'}
          color={
            type === 'positive'
              ? THEME.COLORS.GREEN_DARK
              : THEME.COLORS.RED_DARK
          }
        />
      </IconContainer>
      <PercentText>{percent}</PercentText>
      <PercentDescription>das refeições dentro da dieta</PercentDescription>
    </Container>
  );
}
