"use client"

import { nftMock } from '@/entities/nft'
import { NFTPreview } from '@/entities/nft/api/types'
import { NFTCard } from '@/entities/nft/ui/card'
import { Paragraph } from '@/shared/ui'
import clsx from 'clsx'
import React, { FC, MouseEventHandler, useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { useTranslation } from 'react-i18next'
import 'react-alice-carousel/lib/alice-carousel.css';


type Props = {
  nfts?: NFTPreview[]
  loading?: boolean,
  onNFTClick?: (data: NFTPreview) => void,
  className?: string,
}

const _mockNfts = new Array<NFTPreview>(8).fill(nftMock._nftPreview)

export const NFTCarousel: FC<Props> = (props) => {
  const { 
    nfts, 
    loading = false, 
    onNFTClick,
    className
  } = props
  const total = nfts?.length || 0
  const list = loading ? _mockNfts : total ? nfts : null
  const { t } = useTranslation("nft")
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if(!loaded) return null
  
  return (
    <AliceCarousel 
      /* className={clsx(className)} */
      disableButtonsControls
      autoPlay
      mouseTracking
      infinite
      touchMoveDefaultEvents={false}
      autoPlayInterval={4000}
      swipeExtraPadding={32}
      responsive={{
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
      }}
      disableDotsControls
      items={list?.map((nft, i) => (
        <NFTCard
          className='bg-white'
          key={loading ? i : nft.id}
          data={nft}
          onClick={onNFTClick ? () => onNFTClick(nft) : undefined}
          loading={loading}

        />
      ))}

    />
  )
}
