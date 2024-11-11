"use client"

import { Web3ReactProvider } from '@web3-react/core'
import { FC, PropsWithChildren, useEffect } from 'react'
import { CONNECTORS, getConnection, tryActivateConnector } from './connectors'

const AutoActivator = () => {
  useEffect(() => {
    const connector = localStorage.getItem("connector")
    if(connector) {
      tryActivateConnector(getConnection(connector as any).connector).then(console.log).catch(console.error)
    }
    
  }, [])
  
  return null
}

export const Web3Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Web3ReactProvider 
      connectors={Object.values(CONNECTORS).map(({ connector, hooks }) => [connector, hooks])}  
    >
      <AutoActivator />
      {children}
    </Web3ReactProvider>
  )
}
