"use client"

import clsx from 'clsx';
import {  ElementType, ComponentPropsWithoutRef } from 'react';

type Props<T extends ElementType> = {
  level: keyof typeof sizeClasses;
  children: React.ReactNode;
  as?: T;
} & ComponentPropsWithoutRef<T>;

const sizeClasses = {
  "1": 'text-[5rem] leading-[100%]',  // 80px/100%
  "2": 'text-[3rem] leading-[auto]',  // 48px/Auto
  "3": 'text-[2rem] leading-[auto]',  // 32px/Auto
  "4": 'text-[1.5rem] leading-[auto]',  // 24px/Auto
  "5": 'text-[1.25rem] leading-[auto]', // 20px/Auto
  "6": 'text-[1.125rem] leading-[auto]' // 18px/Auto
} as const;

const Heading = <T extends ElementType = "h1">(props: Props<T>) => {
  const { level = "1", children, as: Component = "h1", className, ...restProps } = props

  return (
    <Component 
      className={clsx("font-bold", sizeClasses[level], className)}
      {...restProps}
    >
        {children}
    </Component>);
};

export { Heading };