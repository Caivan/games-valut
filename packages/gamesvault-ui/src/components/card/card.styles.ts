import styled, { css } from 'styled-components';
import type { CardProps } from './card.type';

const getPaddingStyles = (padding: string) => {
  switch (padding) {
    case 'none':
      return css`
        padding: 0;
      `;
    case 'small':
      return css`
        padding: ${({ theme }) => theme.spacing.sm};
      `;
    case 'medium':
      return css`
        padding: ${({ theme }) => theme.spacing.md};
      `;
    case 'large':
      return css`
        padding: ${({ theme }) => theme.spacing.lg};
      `;
    default:
      return css`
        padding: ${({ theme }) => theme.spacing.md};
      `;
  }
};

export const StyledCard = styled.div<CardProps>`
  background-color: ${({ theme, variant = 'default' }) =>
    variant === 'muted' ? theme.colors.surfaceMuted : theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme, radius = 'lg' }) => theme.radii[radius]};

  ${({ padding = 'medium' }) => getPaddingStyles(padding)}

  ${({ interactive, onClick }) =>
    (interactive || onClick) &&
    css`
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      &:active {
        transform: translateY(0);
      }
    `}
`;
