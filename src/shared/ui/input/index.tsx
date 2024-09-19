import {forwardRef, useMemo} from "react";
import { useInput, InputProps } from "@nextui-org/input";
import { TbAlertTriangleFilled } from "react-icons/tb";
import clsx from "clsx";
import { Label } from "../typography";

const styles: InputProps["classNames"] = {
  base: [
    "data-[has-label=true]:mt-0 "
  ],
  label: [
    "!text-sm !text-gray-600 dark:text-white/90 group-focus-within:!text-black",
    "mb-1",
    "static",
    "!scale-100",
    "!translate-y-0"
  ],
  input: [
    "outline-none",
    "!bg-green-600",
    "h-full",
    "flex-shirk",
    "px-3 first:pl-0 last:pr-0",
    /* "text-black/90 dark:text-white/90",
    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
    "bg-red-500", */
  ],
  innerWrapper: [
    ""
  ],
  inputWrapper: [
    /* border */
    "border border-black-out-200 group-focus-within:border-black",
    /* round */
    "rounded-md bg",
    /* height */,
    "h-12",
    /* Background */
    "!bg-transparent",
    /* "dark:bg-default/60",
    "backdrop-blur-xl",
    "backdrop-saturate-200",
    "hover:bg-default-200/70",
    "dark:hover:bg-default/70",
    "dark:focus-within:!bg-default/60", */
    "!cursor-text",
  ],
};

type Props = {
} & InputProps

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { classNames, placeholder, ...restProps } = props
  const {
    Component,
    label,
    domRef,
    description,
    isClearable,
    startContent,
    endContent,
    shouldLabelBeOutside,
    shouldLabelBeInside,
    errorMessage,
    getBaseProps,
    getLabelProps,
    getInputProps,
    getInnerWrapperProps,
    getInputWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getClearButtonProps,
  } = useInput({
    ...props,
    ref,
    classNames: {
      base: clsx(styles.base, classNames?.base),
      clearButton: clsx(classNames?.clearButton),
      description: clsx(classNames?.description),
      errorMessage: clsx(classNames?.errorMessage),
      helperWrapper: clsx(classNames?.helperWrapper),
      innerWrapper: clsx(styles.innerWrapper, classNames?.innerWrapper),
      input: clsx(styles.input, classNames?.input),
      inputWrapper: clsx(styles.inputWrapper, classNames?.inputWrapper),
      label: clsx(styles.label, classNames?.label),
      mainWrapper: clsx(classNames?.mainWrapper),
    },
    placeholder: placeholder || "ㅤ"
  });

  const labelContent = <Label size="sm" {...getLabelProps()}>{label}</Label>;

  const end = useMemo(() => {
    if (isClearable) {
      return <span {...getClearButtonProps()}>{endContent}</span>;
    }

    return endContent;
  }, [isClearable, getClearButtonProps]);

  const innerWrapper = useMemo(() => {
    if (startContent || end) {
      return (
        <div {...getInnerWrapperProps()}>
          {startContent}
          <input {...getInputProps()} />
          {end}
        </div>
      );
    }

    return <input {...getInputProps()} />;
  }, [startContent, end, getInputProps, getInnerWrapperProps]);

  return (
    <Component {...getBaseProps()}>
      { labelContent }
      <div
        {...getInputWrapperProps()}
        role="button"
        onClick={() => {
          domRef.current?.focus();
        }}
      >
        {innerWrapper}
      </div>
      {description && <div {...getDescriptionProps()}>{description}</div>}
      {errorMessage && (
        <div 
          {...getErrorMessageProps()}
          className=" mt-1 text-xs text-error"
        >
          <TbAlertTriangleFilled className="inline-block     " />
          {errorMessage}
        </div>
      )}
    </Component>
  );
});

Input.displayName = "Input";

export { Input };