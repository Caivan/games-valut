import styled, { css } from 'styled-components';
import type { TypographyProps, TypographyVariant } from './typography.type';

const getVariantStyles = (variant: TypographyVariant) => {
  switch (variant) {
    case 'headline':
      return css`
        font-size: ${({ theme }) => theme.typography.sizes.headline};
        font-weight: ${({ theme }) => theme.typography.weights.semibold};
        line-height: ${({ theme }) => theme.typography.lineHeights.headline};
      `;
    case 'subtitle':
      return css`
        font-size: ${({ theme }) => theme.typography.sizes.subtitle};
        font-weight: ${({ theme }) => theme.typography.weights.medium};
        line-height: ${({ theme }) => theme.typography.lineHeights.subtitle};
      `;
    case 'body':
      return css`
        font-size: ${({ theme }) => theme.typography.sizes.body};
        font-weight: ${({ theme }) => theme.typography.weights.regular};
        line-height: ${({ theme }) => theme.typography.lineHeights.body};
      `;
    case 'caption':
      return css`
        font-size: ${({ theme }) => theme.typography.sizes.caption};
        font-weight: ${({ theme }) => theme.typography.weights.regular};
        line-height: ${({ theme }) => theme.typography.lineHeights.caption};
      `;
    case 'label':
      return css`
        font-size: ${({ theme }) => theme.typography.sizes.label};
        font-weight: ${({ theme }) => theme.typography.weights.medium};
        line-height: ${({ theme }) => theme.typography.lineHeights.label};
        text-transform: uppercase;
        letter-spacing: 0.05em;
      `;
    default:
      return css``;
  }
};

export const StyledTypography = styled.div<TypographyProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  margin: 0;

  color: ${({ theme, color = 'primary' }) =>
    color === 'secondary'
      ? theme.colors.textSecondary
      : theme.colors.textPrimary};

  ${({ variant = 'body' }) => getVariantStyles(variant)}
`;
