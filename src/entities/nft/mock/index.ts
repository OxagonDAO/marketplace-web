import { NFTDetails, NFTPreview } from "../api/types"

export const _nftPreview: NFTPreview = {
  "name": "Example mock nft",
  "creator": {
    "username": "Creator Name",
    "id": "random uiid",
    "avatar": "/images/avatars/3.png"
  },
  "currentBid": {
    "amount": 1.0008,
    "assetId": "eth",
    "assetSymbol": "ETH",
    "rate": 2043.00
  },
  "image": "/images/nfts/4.png",
  id: "random"
}

export const _nftDetails: NFTDetails = {
  ..._nftPreview,
  description: "Lorem ipsum dolor sit amet adipiscing elit. Proin qual de suis erestopius iquee nean sollicituin lorem quis. Keep pace down the forest road, and pretend there's no echo. Go numb with exhaustion, heaving sharp, icy breath.",
  owner: {
    "username": "Alter Wooden",
    "avatar": "/images/avatars/5.png"
  },
  views: 120,
  likes: 6,
  tokenId: "950921732",
  method: "auction",
  endDate: "2024-09-22T00:00:00Z",
  category: "art"
}