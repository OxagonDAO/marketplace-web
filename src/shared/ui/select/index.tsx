
// @ts-nocheck

import { Select as NSelect, SelectProps, useSelect, UseSelectProps} from "@nextui-org/select";
import clsx from "clsx";
import React, { FC, forwardRef, ReactElement, Ref, useMemo } from "react";

const _styles: SelectProps["classNames"] = {
  label: [
    "text-sm !text-gray-600 group-focus-within:!text-black",
  ],
  trigger: [
    "bg-gray-100",
    "h-12",
    "rounded-md",
    "border border-gray-400 group-focus-within:border-black",
  ],
  errorMessage: [
    "text-sm"
  ]
}

type Props<T extends object> = {} & SelectProps<T>
const selectRender = <T extends object,>(props: Props<T>, ref: Ref<HTMLSelectElement>) => {
  const { classNames, placeholder,...restProps} = props

  return (
    <NSelect 
      {...restProps}
      classNames={{
        base: clsx(_styles.base, classNames?.base),
        description: clsx(_styles.description, classNames?.description),
        errorMessage: clsx(_styles.errorMessage, classNames?.errorMessage),
        helperWrapper: clsx(_styles.helperWrapper, classNames?.helperWrapper),
        innerWrapper: clsx(_styles.innerWrapper, classNames?.innerWrapper),
        label: clsx(_styles.label, classNames?.label),
        listbox: clsx(_styles.listbox, classNames?.listbox),
        listboxWrapper: clsx(_styles.listboxWrapper, classNames?.listboxWrapper),
        mainWrapper: clsx(_styles.mainWrapper, classNames?.mainWrapper),
        popoverContent: clsx(_styles.popoverContent, classNames?.popoverContent),
        selectorIcon: clsx(_styles.selectorIcon, classNames?.selectorIcon),
        spinner: clsx(_styles.spinner, classNames?.spinner),
        trigger: clsx(_styles.trigger, classNames?.trigger),
        value: clsx(_styles.value, classNames?.value),
      }}
      labelPlacement="outside"
      placeholder={placeholder || "ㅤ"}
      ref={ref}
    />
  )
}

export const Select = forwardRef(selectRender) as <T extends object>(
  props: Props<T> & { ref?: Ref<HTMLSelectElement> }
) => ReactElement

type OldProps = {
} & UseSelectProps<HTMLSelectElement>

const MySelectTest = forwardRef<HTMLSelectElement, OldProps>((props, ref) => {
  const {
    Component,
    getBaseProps,
    getLabelProps,
    label,
    endContent,
    startContent,
    getInnerWrapperProps,
    getValueProps,
    getMainWrapperProps,
    getHelperWrapperProps,
    getTriggerProps,
    getSelectorIconProps,
    getDescriptionProps,
    getErrorMessageProps,
    selectorIcon,
    renderValue,
    errorMessage,
    description,
    getListboxWrapperProps,
    getListboxProps,
    domRef,
    state: { selectedItems,   }

  } = useSelect({
    ref,
    ...props
  })

  const labelContent = <label {...getLabelProps()}>{label}</label>;

  const innerWrapper = useMemo(() => {
    if (startContent || endContent) {
      return (
        <div {...getInnerWrapperProps()}>
          {startContent}
          <div {...getValueProps()}>
            {/* {renderValue && renderValue(selectedItems)} */}
          </div>
          {endContent}
        </div>
      );
    }

    return <div {...getValueProps()} />;
  }, [startContent, endContent, renderValue, getValueProps, getInnerWrapperProps]);

  const selectorIconContent = <div {...getSelectorIconProps()}>{selectorIcon}</div>

  return (
    <Component {...getBaseProps()}>
      <div {...getMainWrapperProps()}>
        <button 
          {...getTriggerProps()}
          type="button"
          onClick={() => {
            domRef.current?.focus();
          }}
        >
          { labelContent }
          { innerWrapper }
          {selectorIconContent}
        </button>
        <div {...getHelperWrapperProps()}>
          {description && (<div {...getDescriptionProps()}>{description}</div>)}
          {errorMessage && (<div {...getErrorMessageProps()}>{errorMessage}</div>)}
        </div>
      </div>
      <div {...getListboxWrapperProps()}>
        {/* <ul {...getListboxProps()}></ul> */}
      </div>
    </Component>
  )
})
