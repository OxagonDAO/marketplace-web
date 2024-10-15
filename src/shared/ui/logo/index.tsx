import clsx from 'clsx'
import React, { FC } from 'react'

type Props = {
  type?: "white" | "dark"
}

export const Logo: FC<Props> = ({ type = "dark"}) => {
  return (
    <div>
      <strong className={clsx('text-lg', type === "dark" ? "text-black-out" : "text-white")}>PumpMint</strong>
    </div>
  )
}
