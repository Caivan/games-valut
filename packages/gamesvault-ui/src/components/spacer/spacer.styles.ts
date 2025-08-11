import styled, { css } from 'styled-components';
import type { SpacerProps } from './spacer.type';

const getSizeValue = (size: string) => {
  switch (size) {
    case 'xs':
      return css`
        ${({ theme }) => theme.spacing.xs}
      `;
    case 'sm':
      return css`
        ${({ theme }) => theme.spacing.sm}
      `;
    case 'md':
      return css`
        ${({ theme }) => theme.spacing.md}
      `;
    case 'lg':
      return css`
        ${({ theme }) => theme.spacing.lg}
      `;
    case 'xl':
      return css`
        ${({ theme }) => theme.spacing.xl}
      `;
    default:
      return css`
        ${({ theme }) => theme.spacing.md}
      `;
  }
};

export const StyledSpacer = styled.div<SpacerProps>`
  ${({ size = 'md', horizontal = false, vertical = true }) => {
    const spacing = getSizeValue(size);

    if (horizontal && vertical) {
      return css`
        width: ${spacing};
        height: ${spacing};
      `;
    }

    if (horizontal) {
      return css`
        width: ${spacing};
        height: 0;
        display: inline-block;
      `;
    }

    return css`
      width: 100%;
      height: ${spacing};
    `;
  }}
`;
