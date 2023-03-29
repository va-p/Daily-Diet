import styled, { css } from 'styled-components/native';

import { Pressable } from 'react-native';

export type ButtonTypeProps = 'primary' | 'secondary';

type ButtonProps = {
  type: ButtonProps;
  isActive: boolean;
};

export const Container = styled(Pressable)<ButtonProps>`
  flex-direction: row;
  width: 100%;
  min-height: 50px;
  max-height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  ${({ isActive, type }) =>
    type === 'primary' &&
    isActive &&
    css`
      background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    `}
  ${({ isActive, type }) =>
    type === 'primary' &&
    !isActive &&
    css`
      background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    `}
  ${({ isActive, type }) =>
    type === 'secondary' &&
    isActive &&
    css`
    background-color: ${({ theme }) => theme.COLORS.GRAY_500}
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100}
  `}
  ${({ isActive, type }) =>
    type === 'secondary' &&
    !isActive &&
    css`
    background-color: ${({ theme }) => theme.COLORS.WHITE}
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100}
  `}
`;

export const Title = styled.Text<ButtonProps>`
  padding-left: 16px
    ${({ type }) =>
      type === 'primary' &&
      css`
        color: ${({ theme }) => theme.COLORS.WHITE};
      `}
    ${({ type }) =>
      type === 'secondary' &&
      css`
        color: ${({ theme }) => theme.COLORS.GRAY_100};
      `};
`;
