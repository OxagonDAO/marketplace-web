"use server"

import Moralis from 'moralis';
import { EvmChain } from 'moralis/common-evm-utils';


console.log(process.env.MORALIS_API_KEY)

const moralis = Moralis
moralis.start({
  apiKey: process.env.MORALIS_API_KEY
})

export const getNfts = async (address: string, chain: EvmChain, type: "collection" | "") => {
  const res = await moralis.EvmApi.nft.getWalletNFTs({
    address,
    chain
  })
  console.log(res.result)
  return res.result
}
