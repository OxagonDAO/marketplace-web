import { NFTItemDetails } from '@/widgets/nft'
import React, { FC } from 'react'


type Props = { params: { id: string } }
const Page: FC<Props> = ({ params: { id }}) => {
  return (
    <div>
      <NFTItemDetails id={id} />
    </div>
  )
}

export default Page