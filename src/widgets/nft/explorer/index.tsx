"use client"

import { nftApi } from '@/entities/nft'
import { NFTPreview } from '@/entities/nft/api/types'
import { NFTGridList, NFTTagFilters } from '@/features/nft'
import { Section, SectionHeader } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const NFTExplorer = () => {
  const [filters, setFilters] = useState()
  const { data, isFetching } = nftApi.useExplorerNFTSQuery()
  const router = useRouter()
  const { t } = useTranslation()

  const handleNFTClick= (nft: NFTPreview) => {
    router.push(`/marketplace/item/${nft.id}`)
  }

  return (
    <Section>
      <SectionHeader
        title={t("exploreNftArt.title", { ns: "home"})}
        description={t("exploreNftArt.description", { ns: "home"})}
      />
      <NFTTagFilters tags={data?.tags} loading={isFetching} />
      <NFTGridList 
        nfts={data?.list} 
        loading={isFetching}
        className="grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4"
        onNFTClick={handleNFTClick} 
      />
    </Section>
  )
}
 