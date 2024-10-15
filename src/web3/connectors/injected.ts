import { initializeConnector } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'

import { Connection, ConnectionType } from '../types'
import { errorConnectionHandler } from '../error-connection-handler'

export function buildInjectedConnector() {
  const [web3MetamaskWallet, web3MetamaskWalletHooks] = initializeConnector<MetaMask>(
    (actions) => new MetaMask({ actions, onError: errorConnectionHandler }),
  )
  const injectedConnection: Connection = {
    connector: web3MetamaskWallet,
    hooks: web3MetamaskWalletHooks,
    type: ConnectionType.INJECTED,
    
  }

  return injectedConnection
}