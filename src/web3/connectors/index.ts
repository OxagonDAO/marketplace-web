import { AddEthereumChainParameter, Connector } from "@web3-react/types";
import { buildInjectedConnector } from "./injected";
import { ConnectionType } from "../types";

export const CONNECTORS = {
  [ConnectionType.INJECTED]: buildInjectedConnector()
}

function getIsBraveWallet(): boolean {
  return window.ethereum?.["isBraveWallet" as keyof typeof window.ethereum] ?? false
}

export function getHasMetaMaskExtensionInstalled(): boolean {
  return (window.ethereum?.isMetaMask ?? false) && !getIsBraveWallet()
}

export function getConnection(c: Connector | ConnectionType) {
  if (c instanceof Connector) {
    const connection = Object.values(CONNECTORS).find((connection) => connection.connector === c)
    if (!connection) {
      throw Error('Unsupported Connector')
    }
    return connection
  } else {
    switch (c) {
      case ConnectionType.INJECTED:
        return CONNECTORS[ConnectionType.INJECTED]
      /* case ConnectionType.COINBASE_WALLET:
        return CONNECTORS[ConnectionType.COINBASE_WALLET]
      case ConnectionType.WALLET_CONNECT:
        return CONNECTORS[ConnectionType.WALLET_CONNECT]
      case ConnectionType.GNOSIS_SAFE:
        return CONNECTORS[ConnectionType.GNOSIS_SAFE]
      case ConnectionType.NETWORK:
        return CONNECTORS[ConnectionType.NETWORK] */
    }

    throw Error('Unsupported Connector')
  }
}

/* export const switchNetwork = async (chainId: number, connectionType: ConnectionType | null) => {
  if (!connectionType) {
    return
  }

  const { connector } = getConnection(connectionType)

  if (connectionType === ConnectionType.WALLET_CONNECT || connectionType === ConnectionType.NETWORK) {
    await connector.activate(chainId)
    return
  }

  const chainInfo = CHAIN_INFO[chainId]
  const addChainParameter: AddEthereumChainParameter = {
    chainId,
    chainName: chainInfo.label,
    rpcUrls: [chainInfo.rpcUrl],
    nativeCurrency: chainInfo.nativeCurrency,
    blockExplorerUrls: [chainInfo.explorer],
  }
  await connector.activate(addChainParameter)
} */

export const tryActivateConnector = async (connector: Connector): Promise<ConnectionType | undefined> => {
  await connector.activate()
  const connectionType = getConnection(connector).type
  return connectionType
}

export const tryDeactivateConnector = async (connector: Connector): Promise<null | undefined> => {
  connector.deactivate?.()
  connector.resetState()
  return null
}