"use client"

import { Heading, Paragraph } from '@/shared/ui'
import { Avatar } from '@nextui-org/avatar'
import Image from 'next/image'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin, TbBrandX } from "react-icons/tb";


type Props = {

}

export const UserProfile: FC<Props> = () => {
  const { t } = useTranslation("user", { keyPrefix: "label" })

  return (
    <div>
      <div className='relative w-full h-96'>
        <Image 
          alt='hero'
          src="/images/nfts/2.png"
          fill
        />
        <div className='absolute left-0 right-0 bottom-0'>
          <div className='container mx-auto flex gap-6 px-4 py-8'>
            <Paragraph className='text-white'>{t("following")} 124</Paragraph>
            <Paragraph className='text-white'>{t("followers")} 8.6k</Paragraph>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center relative bottom-12'>
        <Avatar
          size='lg'
          className='w-24 h-24'
        />
        <Heading level='4' as='h4' className='mt-4'>
          {"Unnamed"}
        </Heading>
        <Paragraph className='text-black-out-40 mt-2' >
          {"Connect with one of your available wallet providers with one of your available wallet providers"}
        </Paragraph>
        <div className='flex gap-4 mt-6 [&>*]:text-2xl [&>*]:shadow-lg [&>*]:p-2 [&>*]:rounded-lg'>
          <div>
            <TbBrandFacebook />
          </div>
          <div>
            <TbBrandInstagram />
          </div>
          <div>
            <TbBrandLinkedin />
          </div>
          <div>
            <TbBrandX />
          </div>
        </div>
      </div>
    </div>
  )

}
