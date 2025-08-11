import React from 'react';
import type { CardProps } from './card.type';
import { StyledCard } from './card.styles';

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'medium',
  radius = 'lg',
  children,
  className,
  onClick,
  interactive = false,
  ...props
}) => {
  return (
    <StyledCard
      variant={variant}
      padding={padding}
      radius={radius}
      className={className}
      onClick={onClick}
      interactive={interactive}
      {...props}
    >
      {children}
    </StyledCard>
  );
};
