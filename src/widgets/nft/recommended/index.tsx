"use client"

import { NFT } from '@/entities/nft/api/types'
import { nftApi } from '@/entities/nft'
import { NFTPreview } from '@/entities/nft/api/types'
import { NFTCarousel } from '@/features/nft'
import { Section, SectionHeader } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import { FC, ReactNode, useState } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  title: ReactNode,
  description: ReactNode
}

export const NFTRecommended: FC<Props> = (props) => {
  const { description, title } = props
  const { data, isFetching } = nftApi.useExplorerNFTSQuery()
  const { t } = useTranslation("common")
  const router = useRouter()

  const handleNFTClick= (nft: NFT) => {
    router.push(`/marketplace/${nft.contract_address}/${nft.token_id}`)
  }

  return (
    <Section>
      <SectionHeader
        title={title}
        description={description}
      />
      <div className='mt-8'>
        <NFTCarousel
          nfts={data} 
          loading={isFetching}
          className="grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4"
          onNFTClick={handleNFTClick} 
        />
      </div>
    </Section>
  )
}
 