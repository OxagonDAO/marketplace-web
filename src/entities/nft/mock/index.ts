import { NFT, NFTDetails, NFTPreview } from "../api/types"

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

export const _nft: NFT = {
  "minter": {
        "username": null,
        "avatar": null,
        "address": "0x3316bcbfcfc36a8a8551af4371f033223d9756b0"
    },
    "owner": {
        "username": null,
        "avatar": null,
        "address": "0x04e64b89ffb72756fc8afef026e06d5838029dbc"
    },
    "current_bid": {
        "price": null,
        "asset_id": null,
        "symbol": null,
        "rate": 0
    },
    "contract_address": "0xbee7cb80dfd21a9eaae714208f361601f68eb746",
    "contract_name": "Women Unite - 10k Assemble",
    "token_id": "2000",
    "name": "Women Unite - 10k Assemble 2000",
    "description": "",
    "image": "https://metadata.nftscan.com/eth/0xbee7cb80dfd21a9eaae714208f361601f68eb746/0x00000000000000000000000000000000000000000000000000000000000007d0.png",
    "attributes": [
        {
            "attribute_name": "Model",
            "attribute_value": "Lifestyle by Stefanie",
            "percentage": "2.37%"
        },
        {
            "attribute_name": "Background",
            "attribute_value": "Pistachio Green",
            "percentage": "6.67%"
        },
        {
            "attribute_name": "Head",
            "attribute_value": "White Head Cover",
            "percentage": "3.08%"
        },
        {
            "attribute_name": "Clothing",
            "attribute_value": "Orange Bandeau",
            "percentage": "2.63%"
        },
        {
            "attribute_name": "Special",
            "attribute_value": "Watermelon & Fork",
            "percentage": "0.62%"
        },
        {
            "attribute_name": "Special Powers",
            "attribute_value": "Third Eye Blue Trident",
            "percentage": "4.46%"
        }
    ],
    "metadata_url": null,
    "end_date": null,
    "method": "auction",
    "category": "art",
    "views": 0,
    "likes": 0,
    "price": 0,
    "currency": null,
    "status": "listed",
    "created_at": "2022-04-07T12:58:38.000Z",
}