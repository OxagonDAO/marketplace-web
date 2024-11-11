"use client"

import { NFTItemDetails, NFTRecommended } from '@/widgets/nft'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'


type Props = { params: { address: string, id: string } }
const Page: FC<Props> = ({ params: { address, id }}) => {
  const { t } = useTranslation("home")
  
  return (
    <div>
      <NFTItemDetails id={id} address={address} />
      <div className="bg-blue-10 py-20">
        <NFTRecommended title={t("recommendedArt.title")} description={t("recommendedArt.description")} />
      </div>
    </div>
  )
}

export default Page