"use client"

import {forwardRef} from "react";
import {useButton, /* Ripple, */ ButtonProps as BaseButtonProps} from "@nextui-org/button";
import clsx from "clsx";

export interface ButtonProps extends Omit<BaseButtonProps, "variant"> {
  variant?: keyof typeof _styles.variant,
  size?: keyof typeof _styles.size,
  shape?: keyof typeof _styles.shape,
}

const _styles = {
  base: clsx(
    'font-semibold focus:outline-none transition-colors disabled:text-gray-400 disabled:cursor-not-allowed',
    'hover:bg-like-and-kiss hover:text-white'
  ),
  variant: {
    primary: 'bg-blue text-white',
    secondary: 'bg-transparent text-black-out border border-black-out-20',
    tertiary: 'bg-white text-black hover:bg-gray-100 active:bg-gray-200',
    hover: 'bg-pink-400 text-white hover:bg-pink-300 active:bg-pink-500',
  },
  size: {
    lg: 'h-14 px-6 text-lg',
    md: 'h-12 px-4 text-base',
    sm: 'h-8 px-3 text-sm',
  },
  shape: {
    rectangle: 'rounded-md',
    circle: 'rounded-full',
  },
   
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { 
    className, 
    variant = "primary", 
    size = "md",
    shape = "rectangle",
    ...restProps 
  } = props
  const {
    domRef,
    children,
    spinnerSize,
    spinner /* = <Spinner color="current" size={spinnerSize} /> */,
    spinnerPlacement,
    startContent,
    endContent,
    isLoading,
    disableRipple,
    getButtonProps,
    getRippleProps,
  } = useButton({
    ref,
    ...restProps,
  });

  const {ripples, onClear} = getRippleProps();

  /* console.log(getButtonProps) */

  return (
    <button 
      ref={domRef} 
      className={clsx(
        _styles.base,
        _styles.variant[variant],
        _styles.size[size],
        _styles.shape[shape],
        className,
      )}
      {...getButtonProps()}
    >
      {startContent}
      {isLoading && spinnerPlacement === "start" && spinner}
      {children}
      {isLoading && spinnerPlacement === "end" && spinner}
      {endContent}
      {/* {!disableRipple && <Ripple ripples={ripples} onClear={onClear} />} */}
    </button>
  );
});

Button.displayName = "Button";