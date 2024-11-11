"use client"

import { NFTCard } from '@/entities/nft'
import { _nft, _nftPreview } from '@/entities/nft/mock'
import { NFTCreateCollectionForm, NFTCreateForm, NFTDeployCollectionPopup } from '@/features/nft'
import { Section, SectionHeader } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const NFTCreateCollection = () => {
  const router = useRouter()
  const { t } = useTranslation("nft")
  const [data, setData] = useState<FormData>()

  return (
    <Section>
      <SectionHeader
        centerHeader
        title={t("deploy-collection.title.main")}
        description={t("deploy-collection.description")}
      />
      <div className='flex gap-24 mt-24 justify-center pb-16'>
        <NFTCreateCollectionForm onSubmitted={setData} />
        <NFTDeployCollectionPopup data={data} />
      </div>
    </Section>
  )
}
 