import clsx from 'clsx';
import { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';

type Props<T extends ElementType> = {
  size?: keyof typeof sizeClasses;
  children: ReactNode;
  as?: T;
} & ComponentPropsWithoutRef<T>;

const sizeClasses = {
  xl: 'text-xl leading-[auto]',       // 20px/Auto
  lg: 'text-[1.125rem] leading-[auto]',       // 18px/Auto
  base: 'text-[1rem] font-medium leading-[1.75rem]', // 16px/28px
  sm: 'text-[0.75rem] leading-[auto]',        // 12px/Auto
  xs: 'text-[0.625rem] leading-[auto]'   // 10px/Auto
} as const;

const Paragraph = <T extends ElementType = "p">(props: Props<T>) => {
  const { size = "base", children, as: Component = "p", className, ...restProps } = props

  return (
    <Component
      className={clsx("text-black-out", sizeClasses[size], className)}
      {...restProps}
    >
      {children}
    </Component>);
};

export { Paragraph };