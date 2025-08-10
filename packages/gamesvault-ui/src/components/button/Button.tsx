import React from 'react';
import { ButtonWrapper } from './button.styles';
import type { ButtonProps } from './button.type';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  label,
}) => {
  console.log(`Button rendered with variant: ${variant} and size: ${size}`);

  return (
    <ButtonWrapper variant={variant} size={size} onClick={onClick}>
      {children || label}
    </ButtonWrapper>
  );
};
