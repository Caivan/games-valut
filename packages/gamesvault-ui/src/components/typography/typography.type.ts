export type TypographyVariant =
  | 'display'
  | 'headline'
  | 'subtitle'
  | 'body'
  | 'caption'
  | 'label';
export type TypographyElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'div';

export interface TypographyProps {
  variant?: TypographyVariant;
  as?: TypographyElement;
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}
