"use client"

import { Web3ReactProvider } from '@web3-react/core'
import { FC, PropsWithChildren } from 'react'
import { CONNECTORS } from './connectors'



export const Web3Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Web3ReactProvider 
      connectors={Object.values(CONNECTORS).map(({ connector, hooks }) => [connector, hooks])} 

    >
      {children}
    </Web3ReactProvider>
  )
}
