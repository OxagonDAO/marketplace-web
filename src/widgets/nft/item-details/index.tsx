"use client"

import { nftApi, nftMock } from '@/entities/nft'
import { NFTPreview } from '@/entities/nft/api/types'
import { NFTUserInfo, NFTFilters, NFTGridList, NFTPriceInfo, NFTTagFilters, NFTCountdown, NFTDetailsInfo } from '@/features/nft'
import { Button, Heading, Label, Paragraph, Section, SectionHeader } from '@/shared/ui'
import { Skeleton } from '@nextui-org/skeleton'
import { Tab, Tabs } from '@nextui-org/tabs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  id: string
}

export const NFTItemDetails: FC<Props> = (props) => {
  const { id } = props
  const { 
    data = nftMock._nftDetails, 
    isFetching 
  } = nftApi.useGetNFTDetailsByIdQuery(id)
  const loaded = !isFetching
  
  const { t } = useTranslation()

  return (
    <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row"> 
      <figure className="flex-1">
        <Skeleton isLoaded={loaded} className='rounded-lg'>
          <Image src={data.image} alt={data.name} width={560} height={560} className="object-cover rounded-lg" />
        </Skeleton>
        <figcaption className="flex items-center justify-between mt-4">
          <div className="flex space-x-4">
            <button aria-label="Like" className="text-red-500">❤️ 2.7k</button>
            <button>Share</button>
            <button>Refresh</button>
          </div>
          <span>280 views</span>
        </figcaption>
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
          <Paragraph size='lg'>Token ID: <span className='text-blue'>{data.tokenId}</span></Paragraph>
        </Skeleton>

        <div className='flex mt-8 gap-8'>
          <NFTPriceInfo 
            label={t("currentPrice")} 
            loaded={loaded} 
            price={{ amount: data.currentBid.amount, usdValue: data.currentBid.rate }} 
          />
          <NFTCountdown 
            label={t("countdown")}
            loaded={loaded}
            endDate={data.endDate}
            onExpire={() => {}}
          />
        </div>
        <div className='flex gap-8 mt-8'>
          <NFTUserInfo
            loaded={loaded} 
            label={t("creator")}
            avatar={data.creator.avatar}
            name={data.creator.username}
          />
          <NFTUserInfo
            loaded={loaded} 
            label={t("owner")}
            avatar={data.owner.avatar}
            name={data.owner.username}
          />
        </div>
        
        <Tabs 
          variant='underlined' 
          classNames={{
            tab: "p-0",
            tabList: "p-0 before:block before:absolute before:bottom-0 before:w-full before:h-[1px] before:bg-black-out-10",
            base: "mt-8 relative w-full",
            panel: "p-0 mt-6"
          }}
          selectedKey="info" 
          color='primary'
        >
          <Tab 
            key="info" 
            title={<Skeleton isLoaded={loaded} className='rounded-md'>{t("tab.info")}</Skeleton>}
          >
            <NFTDetailsInfo 
              data={data} 
              loaded={loaded}    
            />
          </Tab>
          <Tab 
            key="history" 
            title={<Skeleton isLoaded={loaded} className='rounded-md'>{t("tab.history")}</Skeleton>}
          >
            <NFTDetailsInfo 
              data={data} 
              loaded={loaded}    
            />
          </Tab>
          <Tab 
            key="price" 
            title={<Skeleton isLoaded={loaded} className='rounded-md'>{t("tab.`price`")}</Skeleton>}
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
 