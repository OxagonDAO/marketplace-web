import { FC, HTMLAttributes } from 'react'
import { NFTPreview } from '../api/types'
import { NFTCreatorInfo } from './creator-info'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Skeleton } from '@nextui-org/skeleton'
import { Heading, Label } from '@/shared/ui'
import clsx from 'clsx'

type Props = {
  data: NFTPreview,
  loading?: boolean,
} & HTMLAttributes<HTMLElement>

export const NFTCard: FC<Props> = (props) => {
  const { 
    data: { currentBid, creator, image, name: title }, 
    loading = false,
    className,
    ...restProps 
  } = props
  const { t } = useTranslation()
  const isLoaded = !loading

  return (
    <article className={clsx("bg-black-out-10/20 shrink-0 rounded-2xl w-[356px] h-[610px] overflow-hidden p-4 cursor-pointer hover:bg-white hover:shadow-lg", className)} {...restProps}>
      <Skeleton isLoaded={isLoaded} className='rounded-2xl'>
        <Image src={image} alt={title} className="object-cover rounded-2xl" width={324} height={324} />
      </Skeleton>
      <div className="py-6 ">
        <Skeleton isLoaded={isLoaded} className='rounded-md w-max'>
          <Heading as='h5' level='5' className='inline-block'>{title}</Heading>
        </Skeleton>
        <Skeleton isLoaded={isLoaded} className='rounded-md mt-4'>
          <NFTCreatorInfo name={creator.username} avatar={creator.avatar} />
        </Skeleton>
        <Skeleton isLoaded={isLoaded} className='rounded-md w-max mt-4'>
          <Label size='base'>{t("nft.currentBid")}</Label>
        </Skeleton>
        <div className="flex items-center gap-2 mt-1">
          <Skeleton isLoaded={isLoaded} className='rounded-md'>
            <Heading as='h4' level='4'>{currentBid.amount} {currentBid.assetSymbol}</Heading>
          </Skeleton>
          <Skeleton isLoaded={isLoaded} className='rounded-md'>
            <Label size='sm'>$({currentBid.rate})</Label>
          </Skeleton>
        </div>
      </div>
    </article>
  )
}
