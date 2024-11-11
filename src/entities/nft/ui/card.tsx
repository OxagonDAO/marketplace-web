import { FC, HTMLAttributes } from 'react'
import { NFT } from '../api/types'
import { NFTUserInfo } from './user-info'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Skeleton } from '@nextui-org/skeleton'
import { Heading, Label } from '@/shared/ui'
import { TbLinkOff } from "react-icons/tb";
import clsx from 'clsx'

type Props = {
  data: NFT,
  loading?: boolean,
} & HTMLAttributes<HTMLElement>

export const NFTCard: FC<Props> = (props) => {
  const { 
    data: { current_bid, minter, image, name }, 
    loading = false,
    className,
    ...restProps 
  } = props
  const { t } = useTranslation("common")
  const isLoaded = !loading

  return (
    <article className={clsx("bg-black-out-10/20 shrink-0 rounded-2xl w-full min-w-[288px] max-w-[356px] h-[610px] overflow-hidden p-4 cursor-pointer hover:bg-white hover:shadow-lg", className)} {...restProps}>
      <Skeleton isLoaded={isLoaded} className='rounded-2xl'>
        {image ? (
          <Image src={image} alt={name} className="object-cover rounded-2xl" width={324} height={324} />
          ) : (
            <div className='flex items-center justify-center bg-black-out-10 rounded-2xl w-full h-80' >
              <TbLinkOff className='w-6 h-6 text-black-out-50'/>
            </div>
          )}
      </Skeleton>
      <div className="py-6 ">
        <Skeleton isLoaded={isLoaded} className='rounded-md w-max'>
          <Heading as='h5' level='5' className='inline-block'>{name}</Heading>
        </Skeleton>
        <Skeleton isLoaded={isLoaded} className='rounded-md mt-4'>
          <NFTUserInfo 
            label={t("label.creator")}
            name={minter.username} 
            avatar={minter.avatar} 
            address={minter.address} 
          />
        </Skeleton>
        <Skeleton isLoaded={isLoaded} className='rounded-md w-max mt-4'>
          <Label size='base'>{t("label.current-bid")}</Label>
        </Skeleton>
        <div className="flex items-center gap-2 mt-1">
          <Skeleton isLoaded={isLoaded} className='rounded-md'>
            <Heading as='h4' level='4'>{current_bid.price || 0} {current_bid.symbol}</Heading>
          </Skeleton>
          <Skeleton isLoaded={isLoaded} className='rounded-md'>
            <Label size='sm'>$({current_bid.rate})</Label>
          </Skeleton>
        </div>
      </div>
    </article>
  )
}
