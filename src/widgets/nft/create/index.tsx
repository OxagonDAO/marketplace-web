"use client"

import { NFTCard } from '@/entities/nft'
import { NFTPreview } from '@/entities/nft/api/types'
import { _nftPreview } from '@/entities/nft/mock'
import { NFTCreateForm } from '@/features/nft'
import { Section, SectionHeader } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

export const NFTCreate = () => {
  
  const router = useRouter()
  const { t } = useTranslation(["nft"])

  return (
    <Section>
      <SectionHeader
         centerHeader
        title={t("create.title")}
        description={t("create.description")}
      />
      <div className='flex gap-24 mt-24 justify-center pb-16'>
        <NFTCard data={_nftPreview}  />
        <NFTCreateForm />
      </div>
    </Section>
  )
}
 