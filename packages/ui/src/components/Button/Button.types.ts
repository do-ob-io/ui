export type ButtonVariant = 'bordered' | 'filled' | 'faded' | 'light';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  className?: string;
  iconify?: boolean;
  href?: string;
}
