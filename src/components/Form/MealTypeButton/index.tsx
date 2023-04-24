import React from 'react';
import { Container, Status, Title } from './styles';
import { PressableProps } from 'react-native';

type Props = PressableProps & {
  title: string;
  mealIsInTheDiet: boolean | null;
  isActive: boolean;
};

export function MealTypeButton({
  title,
  mealIsInTheDiet,
  isActive,
  ...rest
}: Props) {
  return (
    <Container mealIsInTheDiet={mealIsInTheDiet} isActive={isActive} {...rest}>
      <Status mealIsInTheDiet={mealIsInTheDiet} />

      <Title>{title}</Title>
    </Container>
  );
}
