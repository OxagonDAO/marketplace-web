import React from 'react'
import { useTranslation } from 'react-i18next'
import { WalletProviderCard } from './card'
import { useRouter } from 'next/navigation'
import { useWallet } from '../wallet'

export const Metamask = () => {
  const { t } = useTranslation("connect-wallet")
  const router = useRouter()
  const { connect } = useWallet()

  const handleClick = async () => {
      const wallet = await connect()
      router.push("/home")

  }

  return (
    <WalletProviderCard
      color="#FFE2C7" 
      name="Metamask"
      description={t(`metamask.description`)}
      width={54}
      height={54}
      logo="/icons/metamask.svg"
      onClick={handleClick}
    />
  )
}
