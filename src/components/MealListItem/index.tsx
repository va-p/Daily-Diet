import React from 'react';
import { PressableProps } from 'react-native';
import {
  Container,
  NameAndStatusContainer,
  Name,
  Status,
  Time,
  TimeContainer,
  Divider,
} from './styles';

export interface MealProps {
  id: string;
  date: string;
  time: string;
  name: string;
  description: string;
  mealIsInTheDiet: boolean;
}

type Props = PressableProps & {
  data: MealProps;
};

export function MealListItem({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <TimeContainer>
        <Time>{data.time}</Time>
      </TimeContainer>

      <Divider />

      <NameAndStatusContainer>
        <Name>{data.name}</Name>
        <Status mealIsInTheDiet={data.mealIsInTheDiet} />
      </NameAndStatusContainer>
    </Container>
  );
}
