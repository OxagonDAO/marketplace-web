import {Modal as ModalNUI, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, UseDisclosureProps} from "@nextui-org/modal";

import type { FC, ReactNode } from 'react'

type Props = {
  headerSlot: ReactNode,
  bodySlot: ReactNode,
  footerSlot: ReactNode,
} & UseDisclosureProps

export const Modal: FC<Props> = (props) => {
  const { headerSlot, bodySlot, footerSlot, ...restProps } = props
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
        base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
        header: "border-b-[1px] border-[#292f46]",
        footer: "border-t-[1px] border-[#292f46]",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
    >
      <ModalContent>
        {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
    </ModalNUI>
  )
}
