import { nftMock } from '@/entities/nft'
import { NFT } from '@/entities/nft/api/types'
import { NFTCard } from '@/entities/nft/ui/card'
import { Paragraph } from '@/shared/ui'
import clsx from 'clsx'
import React, { FC, MouseEventHandler } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  nfts?: NFT[]
  loading?: boolean,
  onNFTClick?: (data: NFT) => void,
  className?: string,
}

const _mockNfts = new Array<NFT>(8).fill(nftMock._nft)

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
          key={loading ? i : nft.contract_address + nft.token_id}
          data={nft}
          onClick={onNFTClick ? () => onNFTClick(nft) : undefined}
          loading={loading}
        />
      )) || (
        <Paragraph className='text-black-out-50'>{t("explorer.paragraph.empty-list")}</Paragraph>
      )}
    </div>
  )
}
