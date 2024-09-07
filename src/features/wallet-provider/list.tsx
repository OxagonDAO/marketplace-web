import React from 'react'
import { WalletProviderCard } from './card'
import { useTranslation } from 'react-i18next'

const wallets = [{
  logo: "/icons/metamask.svg",
  width: 54,
  height: 54,
  name: "Metamask",
  keyPrefix: "metamask",
  color: "#FFE2C7"

}]

export const WalletProviderList = () => {
  const { t } = useTranslation("connect-wallet")

  return (
    <ul className='space-y-4 mt-12 w-max mx-auto'>
      {wallets.map(({ color, name, height, keyPrefix, logo, width }, i) => {
        return (
          <li key={i} className='list-none'>
            <WalletProviderCard 
              color={color} 
              name={name} 
              description={t(`${keyPrefix}.description`)}
              width={width}
              height={height}
              logo={logo}
            />
          </li>)
      })}
    </ul>
  )
}
