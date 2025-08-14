export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large' | 'round';
  disabled?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
};
