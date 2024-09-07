"use client"

import { nftApi } from '@/entities/nft'
import { NFTPreview } from '@/entities/nft/api/types'
import { NFTFilters, NFTGridList, NFTTagFilters } from '@/features/nft'
import { Button, Label, Section, SectionHeader } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const NFTMarketplace = () => {
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
         centerHeader
        title={t("exploreNftArt.title", { ns: "home"})}
        description={t("exploreNftArt.description", { ns: "home"})}
      />
      <div className='flex gap-24'>
        <NFTFilters />
        <div className='flex flex-col w-full'>
          <NFTTagFilters tags={data?.tags} loading={isFetching} />
          <Label className='block text-end mb-4' size='sm'>{t("itemsFounds", { count: data?.list.length })}</Label>
          <NFTGridList 
            nfts={data?.list} 
            loading={isFetching}
             onNFTClick={handleNFTClick}
            className="grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-3"
          />
          <Button className='mx-auto block mt-12' size='lg'>{t("loadMore")}</Button>
        </div>
      </div>
    </Section>
  )
}
 