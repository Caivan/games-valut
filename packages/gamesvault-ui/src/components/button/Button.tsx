import React from 'react';
import { StyledButton } from './button.styles';
import type { ButtonProps } from './button.type';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  children,
  onClick,
  type = 'button',
  ...rest
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
