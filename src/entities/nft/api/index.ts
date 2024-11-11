import { backendApi } from "@/shared/api";
import { NFT, NFTDetailsRes, NFTExplorerRes } from "./types";

const actions = backendApi.injectEndpoints({
  endpoints: (builder) => ({
    explorerNFTS: builder.query<NFT[], void>({
      query: () => ({
        url: "/explore",
        method: "GET"
      })
    }),
    getNFTDetailsById: builder.query<NFT, { address: string, tokenId: string }>({
      query: ({ address, tokenId}) => ({
        url: `/explore/nft/${address}/${tokenId}`,
        method: "GET"
      })
    }),
  }),
});

export const {
  useExplorerNFTSQuery,
  useGetNFTDetailsByIdQuery
} = actions;
