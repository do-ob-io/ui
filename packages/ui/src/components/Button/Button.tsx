import { Button as ButtonAria, ButtonProps as ButtonAriaProps } from 'react-aria-components';
import { fillStyles, emptyStyles, twMerge, interactiveStyles } from '@do-ob/ui/utility';

export interface ButtonProps extends ButtonAriaProps {
  variant?: 'bordered' | 'filled' | 'text';
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

/**
 * Define tailwind classes for the variants.
 */
const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  bordered: 'border-2 bg-transparent hover:brightness-75 active:brightness-50',
  filled: 'border-2 hover:brightness-75 active:brightness-50',
  text: 'border-2 border-transparent bg-transparent hover:bg-black/10 active::bg-black/20',
};

/**
 * Define tailwind classes for the sizes.
 */
const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

/**
 * Button
 */
export function Button({
  children,
  variant = 'filled',
  size = 'md',
  color = 'primary',
  className,
  ...props
}: ButtonProps) {

  const variantClasses = variantStyles[variant];
  const sizeClasses = sizeStyles[size];
  const colorClasses = (() => {
    switch (variant) {
      case 'filled':
        return fillStyles[color];
      case 'bordered':
      case 'text':
        return emptyStyles[color];
    }
  })();
  
  return (
    <ButtonAria
      className={twMerge(
        'rounded',
        interactiveStyles.focus,
        interactiveStyles.mouse,
        colorClasses,
        sizeClasses,
        variantClasses,
        className
      )}
      {...props}
    >
      {children}
    </ButtonAria>
  );
}
