import clsx from 'clsx';
import { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';

type Props<T extends ElementType> = {
  size?: keyof typeof sizeClasses;
  children: ReactNode;
  as?: T;
} & ComponentPropsWithoutRef<T>;

const sizeClasses = {
  lg: 'text-[1.25rem] leading-[auto]',    // 20px/Auto
  base: 'text-[1rem] leading-[auto]',      // 16px/Auto
  sm: 'text-[0.875rem] leading-[auto]'    // 14px/Auto
} as const;

const Label = <T extends ElementType = "label">(props: Props<T>) => {
  const { size = "base", children, as: Component = "label", className, ...restProps } = props

  return (
    <Component
      className={clsx("text-black-out", sizeClasses[size], className)}
      {...restProps}
    >
      {children}
    </Component>);
};

export { Label };