"use client"

import { nftApi, NFTUserInfo, nftMock } from '@/entities/nft'
import { NFTPreview } from '@/entities/nft/api/types'
import { NFTPriceInfo, NFTCountdown, NFTDetailsInfo, NFTPlaceBid, NFTBuyNow } from '@/features/nft'
import { Heading, Paragraph } from '@/shared/ui'
import { Skeleton } from '@nextui-org/skeleton'
import { Tab, Tabs } from '@nextui-org/tabs'
import { image } from '@nextui-org/theme'
import Image from 'next/image'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TbLinkOff } from 'react-icons/tb'

type Props = {
  address: string,
  id: string
}

export const NFTItemDetails: FC<Props> = (props) => {
  const { address, id } = props
  
  const { 
    data = nftMock._nft, 
    isFetching 
  } = nftApi.useGetNFTDetailsByIdQuery({ address, tokenId: id })
  const loaded = !isFetching
  console.log(data)
  
  const { t } = useTranslation("common", { keyPrefix: "label" })

  return (
    <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row"> 
      <figure className="flex-1">
        <Skeleton isLoaded={loaded} className='rounded-lg'>
          {data.image ? (
            <Image src={data.image} alt={data.name} width={560} height={560} className="object-cover rounded-lg" />
          ) : (
            <div className='flex items-center justify-center bg-black-out-10 rounded-2xl w-full h-80' >
              <TbLinkOff className='w-6 h-6 text-black-out-50'/>
            </div>
          )}
        </Skeleton>
        {/* <figcaption className="flex items-center justify-between mt-4">
          <div className="flex space-x-4">
            <button aria-label="Like" className="text-red-500">❤️ 2.7k</button>
            <button>Share</button>
            <button>Refresh</button>
          </div>
          <span>280 views</span>
        </figcaption> */}
      </figure>
      <section className="flex-1 ml-0 md:ml-8 mt-8 md:mt-0">
        <Skeleton className='rounded-md w-max' isLoaded={loaded}>
          <Heading as="h2"  level='2' className="text-black-out">{data.name}</Heading>
        </Skeleton>
        <Skeleton className='rounded-md w-max mt-8' isLoaded={loaded}>
          <Heading as="h4"  level='4' className="text-black-out">{t("description")}</Heading>
        </Skeleton>
        <Skeleton className='rounded-md mt-4' isLoaded={loaded}>
          <Paragraph className="text-black-out-60 !font-medium">{data.description}</Paragraph>
        </Skeleton>
        <Skeleton className='rounded-md mt-8 w-max' isLoaded={loaded}>
          <Paragraph size='lg'>Token ID: <span className='text-blue'>{data.token_id}</span></Paragraph>
        </Skeleton>

        <div className='flex mt-8 gap-8'>
          <NFTPriceInfo 
            label={t("current-price")} 
            loaded={loaded} 
            price={{ amount: data.current_bid.price || 0, usdValue: data.current_bid.rate }} 
          />
          <NFTCountdown 
            label={t("countdown")}
            loaded={loaded}
            endDate={data.end_date || new Date().toISOString()}
            onExpire={() => {}}
          />
        </div>
        <div className='flex gap-8 mt-8'>
          <NFTUserInfo
            size='lg'
            loaded={loaded} 
            label={t("creator")}
            name={data.minter.username}
            avatar={data.minter.avatar}
            address={data.minter.address}
          />
          <NFTUserInfo
            size='lg'
            loaded={loaded} 
            label={t("owner")}
            name={data.owner.username}
            avatar={data.owner.avatar}
            address={data.owner.address}
          />
        </div>

        {/* Actions */}
        <div className='flex mt-8 gap-8'>
          <NFTPlaceBid loaded={loaded} />
          <NFTBuyNow loaded={loaded} />
        </div>
        
        <Tabs 
          variant='underlined' 
          classNames={{
            tab: "p-0 text-base pb-2",
            tabList: "p-0 before:block before:absolute before:bottom-0 before:w-full before:h-[1px] before:bg-black-out-10",
            base: "mt-8 relative w-full",
            panel: "p-0 mt-6",
            tabContent: "group-data-[selected=true]:font-medium"
          }}
          selectedKey="info" 
          color='primary'
        >
          <Tab 
            key="info" 
            title={<Skeleton isLoaded={loaded} className='rounded-md'>{t("info")}</Skeleton>}
          >
            <NFTDetailsInfo 
              data={data} 
              loaded={loaded}    
            />
          </Tab>
          <Tab 
            key="history" 
            title={<Skeleton isLoaded={loaded} className='rounded-md'>{t("history")}</Skeleton>}
          >
            <NFTDetailsInfo 
              data={data} 
              loaded={loaded}    
            />
          </Tab>
          <Tab 
            key="price" 
            title={<Skeleton isLoaded={loaded} className='rounded-md'>{t("price")}</Skeleton>}
          >
            <NFTDetailsInfo 
              data={data} 
              loaded={loaded}    
            />
          </Tab>
        </Tabs>
      </section>
    </div>
  )
}
 