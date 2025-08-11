export interface CardProps {
  variant?: 'default' | 'muted';
  padding?: 'none' | 'small' | 'medium' | 'large';
  radius?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  interactive?: boolean;
}