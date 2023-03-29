import React from 'react';
import { PressableProps } from 'react-native';
import { ButtonTypeProps, Container, Title } from './styles';

type Props = PressableProps & {
  type?: ButtonTypeProps;
  icon?: any;
  title: string;
  isActive?: boolean;
};

export function Button({
  type = 'primary',
  icon,
  title,
  isActive = false,
  ...rest
}: Props) {
  return (
    <Container isActive={isActive} type={type} {...rest}>
      {icon}
      <Title type={type}>{title}</Title>
    </Container>
  );
}
