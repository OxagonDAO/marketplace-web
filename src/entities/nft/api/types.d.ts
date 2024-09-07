export type NFTPreview = {
  name: string,
  id: string,
  image: string,
  creator: {
    id: string,
    username: string,
    avatar: string, 
  },
  currentBid: {
    amount: number,
    assetId: string,
    assetSymbol: string,
    rate: number
  }
}

export type NFTDetails = {
  description: string,
  likes: number,
  views: number,
  category: string,
  owner: {
    username: string,
    avatar: string
  },
  endDate: string,
  method: string,
  tokenId: string
} & NFTPreview

export type NFT = {
  contract: {
    address: string,
    tokenId: string,
    token: string,
    chain: string,
    updatedDate: string,
    endDate: string,
    creatorFee: string
  },
  description: string,
  views: number,
  likes: number,
  owner: {
    id: string,
    username: string,
    avatar: string
  }
} & NFTPreview

export type NFTExplorerRes = {
  tags: string[],
  list: NFTPreview[]
}

export type NFTDetailsRes = NFTDetails