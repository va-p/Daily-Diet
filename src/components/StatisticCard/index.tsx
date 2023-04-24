import React from 'react';
import {
  Container,
  Count,
  Description,
  StatisticCardTypeProps,
} from './styles';

type Props = {
  type: StatisticCardTypeProps;
  count: number;
  description: string;
};

export function StatisticCard({ type, count, description }: Props) {
  return (
    <Container type={type}>
      <Count>{count}</Count>
      <Description>{description}</Description>
    </Container>
  );
}
