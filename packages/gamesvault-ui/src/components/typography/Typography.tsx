import React from 'react';
import type { TypographyElement, TypographyProps } from './typography.type';
import { StyledTypography } from './typography.styles';


export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  as,
  color = 'primary',
  children,
  className,
  ...props
}) => {
  // Default element mapping based on variant
  const getDefaultElement = (): TypographyElement => {
    switch (variant) {
      case 'display':
        return 'h1';
      case 'headline':
        return 'h2';
      case 'subtitle':
        return 'h3';
      case 'caption':
        return 'p';
      case 'label':
        return 'span';
      default:
        return 'p';
    }
  };

  const element = as || getDefaultElement();

  return (
    <StyledTypography
      as={element}
      variant={variant}
      color={color}
      className={className}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};
