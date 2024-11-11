"use client"

import { NFTCard } from '@/entities/nft'
import { _nft, _nftPreview } from '@/entities/nft/mock'
import { NFTCreateForm } from '@/features/nft'
import { Section, SectionHeader } from '@/shared/ui'
import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export const NFTCreate = () => {
  const form = useForm()
  const { t } = useTranslation(["nft"])
  const [image, setImage] = useState<string>()
  const { description, file, name, supply } = form.watch()
  const { account } = useWeb3React()

  useEffect(() => {
    if(file && file.length) {
      new Promise<string>((res, rej) => {
        const reader = new FileReader()
        reader.onload = () => reader.result ? res(reader.result.toString()) : rej(reader.result)
        reader.onerror = rej
        reader.readAsDataURL(file[0])
      }).then(setImage).catch(console.error)
    }
  }, [file])

  return (
    <Section>
      <SectionHeader
         centerHeader
        title={t("create.title")}
        description={t("create.description")}
      />
      <div className='flex gap-24 mt-24 justify-center pb-16'>
        <FormProvider {...form}>
          <NFTCard data={{
            ..._nft,
            image,
            name,
            owner: {
              address: account || "",
            }
          }}  />
          <NFTCreateForm />
        </FormProvider>
      </div>
    </Section>
  )
}
 