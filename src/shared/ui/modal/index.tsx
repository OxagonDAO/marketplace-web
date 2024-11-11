import {Modal as ModalNUI, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, UseDisclosureProps} from "@nextui-org/modal";

import type { FC, ReactNode } from 'react'

type Props = {
  headerSlot?: ReactNode,
  bodySlot?: ReactNode,
  footerSlot?: ReactNode,
} & UseDisclosureProps

export const Modal: FC<Props> = (props) => {
  const { 
    headerSlot, 
    bodySlot, 
    footerSlot, 
    ...restProps 
  } = props
  const {isOpen, onOpen, onOpenChange, onClose } = useDisclosure(restProps);

  return (
    <ModalNUI
      backdrop="opaque" 
      isOpen={isOpen} 
      onOpenChange={onOpenChange}
      radius="lg"
      classNames={{
        body: "py-6",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        base: "border-[#292f46] bg-white dark:bg-[#19172c] text-[#a8b0d3] py-10",
        header: "",
        footer: "",
        closeButton: "hover:bg-white/5 active:bg-black-out/10 text-2xl p-1 m-1",
      }}
    >
      <ModalContent>
        {(onClose) => (
            <>
              {headerSlot  && (<ModalHeader className="flex flex-col gap-1 ">{headerSlot}</ModalHeader>)}
              {bodySlot && (<ModalBody>{bodySlot}</ModalBody>)}
              {footerSlot && (<ModalFooter>{footerSlot}</ModalFooter>)}
            </>
          )}
        </ModalContent>
    </ModalNUI>
  )
}
