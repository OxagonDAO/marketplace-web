import { Web3ReactHooks } from "@web3-react/core"
import { Connector } from "@web3-react/types"

export interface Connection {
  connector: Connector
  hooks: Web3ReactHooks
  type: ConnectionType
}

export enum ConnectionType {
  COINBASE_WALLET = 'COINBASE_WALLET',
  GNOSIS_SAFE = 'GNOSIS_SAFE',
  INJECTED = 'INJECTED',
  NETWORK = 'NETWORK',
  WALLET_CONNECT = 'WALLET_CONNECT',
}