import { nftMock } from '@/entities/nft'
import { NFTPreview } from '@/entities/nft/api/types'
import { NFTCard } from '@/entities/nft/ui/card'
import { Paragraph } from '@/shared/ui'
import clsx from 'clsx'
import React, { FC, MouseEventHandler } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  nfts?: NFTPreview[]
  loading?: boolean,
  onNFTClick?: (data: NFTPreview) => void,
  className?: string,
}

const _mockNfts = new Array<NFTPreview>(8).fill(nftMock._nftPreview)

export const NFTGridList: FC<Props> = (props) => {
  const { 
    nfts, 
    loading = false, 
    onNFTClick,
    className
  } = props
  const total = nfts?.length || 0
  const list = loading ? _mockNfts : total ? nfts : null
  const { t } = useTranslation("nft")
  
  return (
    <div className={clsx("grid gap-8", className)}>
      {list?.map((nft, i) => (
        <NFTCard
          key={loading ? i : nft.id}
          data={nft}
          onClick={onNFTClick ? () => onNFTClick(nft) : undefined}
          loading={loading}
        />
      )) || (
        <Paragraph className='text-black-out-50'>{t("empty-list")}</Paragraph>
      )}
    </div>
  )
}
