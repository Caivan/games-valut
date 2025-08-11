export type SpacerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface SpacerProps {
  size?: SpacerSize;
  horizontal?: boolean;
  vertical?: boolean;
  className?: string;
}
