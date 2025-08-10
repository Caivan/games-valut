export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
