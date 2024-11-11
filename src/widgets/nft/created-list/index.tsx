"use client"

import { nftApi } from '@/entities/nft'
import { NFT } from '@/entities/nft/api/types'
import { NFTGridList, NFTTagFilters } from '@/features/nft'
import { Section, SectionHeader } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const NFTCreatedList = () => {
  const [filters, setFilters] = useState()
  const { data, isFetching } = nftApi.useExplorerNFTSQuery()
  const router = useRouter()
  const { t } = useTranslation()

  const handleNFTClick= (nft: NFT) => {
    router.push(`/marketplace/${nft.contract_address}/${nft.token_id}`)
  }

  return (
    <Section>
      {/* <NFTTagFilters tags={data?.tags} loading={isFetching} /> */}
      <NFTGridList 
        nfts={data} 
        loading={isFetching}
        className="grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 mt-8"
        onNFTClick={handleNFTClick} 
      />
    </Section>
  )
}
 