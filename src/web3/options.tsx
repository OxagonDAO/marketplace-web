import React from 'react'
import { ConnectionType } from './types'
import { Option } from './option'
import { getHasMetaMaskExtensionInstalled } from './connectors'
import { useTranslation } from 'react-i18next'


/* import { METAMASK_URL } from '../constants' */

type ConnectOptionsParams = {
  activeConnectionType: ConnectionType | null
  isConnectionActive: boolean
  onActivate: (connectionType: ConnectionType) => void
  onDeactivate: (connectionType: null) => void
}

export const ConnectionOptions = ({
  activeConnectionType,
  isConnectionActive,
  onActivate,
  onDeactivate,
}: ConnectOptionsParams) => {
  const { t } = useTranslation("connect-wallet")

  function getOptions(isActive: boolean) {
    const hasMetaMaskExtension = getHasMetaMaskExtensionInstalled()

    const isNoOptionActive = !isActive || (isActive && activeConnectionType === null)

    const metaMaskOption = hasMetaMaskExtension ? (
      <Option
        color="#FFE2C7" 
        name="Metamask"
        description={t(`metamask.description`)}
        width={54}
        height={54}
        logo="/icons/metamask.svg"
        isEnabled={isNoOptionActive || activeConnectionType === ConnectionType.INJECTED}
        isConnected={activeConnectionType === ConnectionType.INJECTED}
        connectionType={ConnectionType.INJECTED}
        onActivate={onActivate}
        onDeactivate={onDeactivate}
      />
    ) : (
      <a >
        <button>Install Metamask</button>
      </a>
    )

    /* const coinbaseWalletOption = (
      <Option
        isEnabled={isNoOptionActive || activeConnectionType === ConnectionType.COINBASE_WALLET}
        isConnected={activeConnectionType === ConnectionType.COINBASE_WALLET}
        connectionType={ConnectionType.COINBASE_WALLET}
        onActivate={onActivate}
        onDeactivate={onDeactivate}
      />
    )

    const walletConnectOption = (
      <Option
        isEnabled={isNoOptionActive || activeConnectionType === ConnectionType.WALLET_CONNECT}
        isConnected={activeConnectionType === ConnectionType.WALLET_CONNECT}
        connectionType={ConnectionType.WALLET_CONNECT}
        onActivate={onActivate}
        onDeactivate={onDeactivate}
      />
    ) */

    return (
      <>
        {metaMaskOption}
       {/*  {coinbaseWalletOption}
        {walletConnectOption} */}
      </>
    )
  }


  return (
    <ul className='space-y-4 mt-12 w-max mx-auto'>
      {getOptions(isConnectionActive)}
    </ul>
  )
}