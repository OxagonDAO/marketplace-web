import clsx from "clsx"
import { FC, HTMLAttributes } from "react"

type Props = {
} & HTMLAttributes<HTMLElement>

export const Section: FC<Props> = (props) => {
  const { className, ...restProps } = props
  return (
    <section className={clsx('container mx-auto px-4', className)} {...restProps} />
  )
}
