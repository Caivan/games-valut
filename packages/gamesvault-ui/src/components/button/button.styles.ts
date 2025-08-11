import styled, { css } from 'styled-components';
import type { ButtonProps } from './button.type';

const getVariantStyles = (variant: string) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.surface};
        border: 1px solid ${({ theme }) => theme.colors.primary};

        &:hover:not(:disabled) {
          opacity: 0.9;
        }
      `;
    case 'secondary':
      return css`
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.textPrimary};
        border: 1px solid ${({ theme }) => theme.colors.border};

        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.surfaceMuted};
        }
      `;
    case 'danger':
      return css`
        background-color: ${({ theme }) => theme.colors.danger};
        color: ${({ theme }) => theme.colors.surface};
        border: 1px solid ${({ theme }) => theme.colors.danger};

        &:hover:not(:disabled) {
          opacity: 0.9;
        }
      `;
    default:
      return css``;
  }
};

const getSizeStyles = (size: string) => {
  switch (size) {
    case 'small':
      return css`
        padding: ${({ theme }) => theme.spacing.xs}
          ${({ theme }) => theme.spacing.sm};
        font-size: ${({ theme }) => theme.typography.sizes.caption};
      `;
    case 'medium':
      return css`
        padding: ${({ theme }) => theme.spacing.sm}
          ${({ theme }) => theme.spacing.md};
        font-size: ${({ theme }) => theme.typography.sizes.body};
      `;
    case 'large':
      return css`
        padding: ${({ theme }) => theme.spacing.sm}
          ${({ theme }) => theme.spacing.lg};
        font-size: ${({ theme }) => theme.typography.sizes.subtitle};
      `;
    default:
      return css``;
  }
};

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};

  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  line-height: ${({ theme }) => theme.typography.lineHeights.body};

  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ variant = 'primary' }) => getVariantStyles(variant)}
  ${({ size = 'medium' }) => getSizeStyles(size)}
  
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`;
