import styled from 'styled-components';
import type { ButtonProps } from './button.type';

export const ButtonWrapper = styled.button<ButtonProps>`
  background-color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.primary : 'transparent'};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: ${({ size }) =>
    size === 'small'
      ? '8px 12px'
      : size === 'medium'
        ? '10px 16px'
        : '16px 20px'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
