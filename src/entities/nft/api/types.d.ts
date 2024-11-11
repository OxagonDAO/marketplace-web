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

export type NFT12 = {
  contract: {
    address: string, // 0x5065996eB83290c80f60cEb9FC1dab55e050581D
    tokenId: string, // 1
    standard: string, // erc-1155
    chain: string, // Polygon
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

export type NFT = {
  contract_address: string,
  contract_name: string,
  token_id: string,
  name: string,
  description: string,
  minter: {
    avatar: string | null,
    username: string | null,
    address: string,
  },
  owner: {
    avatar?: string | null,
    username?: string | null,
    address: string,
  }
  image?: string,
  attributes: {
    attribute_name: string,
    attribute_value: string,
    percentage: string,
  }[],
  metadata_url: string | null, //
  current_bid: {
    price: number | null,
    asset_id: string | null,
    symbol: string | null,
    rate: number,
  },
  end_date: null,
  method: string,
  category: string,
  views: number,
  likes: number,
  price: number,
  currency: string | null,
  status: string,
  created_at: string
}