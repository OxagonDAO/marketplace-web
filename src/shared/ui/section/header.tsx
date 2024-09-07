import { FC, HTMLAttributes, ReactNode } from "react"
import { Heading, Paragraph } from "../typography"
import clsx from "clsx"

type Props = {
  title?: ReactNode,
  description?: ReactNode,
  actionsSlot?: ReactNode,
  centerHeader?: boolean
}

export const SectionHeader: FC<Props> = (props) => {
  const { title, description, actionsSlot, centerHeader } = props

  return (
    <header className="flex justify-between">
      <div className={clsx("flex flex-col", centerHeader && "w-full items-center")}>
        {description && <Heading as="h2" level="2">{title}</Heading>}
        {description && <Paragraph className="text-black-out-40" size="lg">{description}</Paragraph>}
      </div>
      <div>
        {actionsSlot}
      </div>
    </header>
  )
}
