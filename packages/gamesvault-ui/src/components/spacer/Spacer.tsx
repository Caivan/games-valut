import React from 'react';
import type { SpacerProps } from './spacer.type';
import { StyledSpacer } from './spacer.styles';

export const Spacer: React.FC<SpacerProps> = ({
  size = 'md',
  horizontal = false,
  vertical = true,
  className,
  ...props
}) => {
  return (
    <StyledSpacer
      size={size}
      horizontal={horizontal}
      vertical={vertical}
      className={className}
      {...props}
    />
  );
};