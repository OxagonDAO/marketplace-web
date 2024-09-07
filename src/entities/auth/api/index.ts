import { backendApi } from "@/shared/api";
import { NFTDetailsRes, NFTExplorerRes } from "./types";

const actions = backendApi.injectEndpoints({
  endpoints: (builder) => ({
    explorerNFTS: builder.query<NFTExplorerRes, void>({
      query: () => ({
        url: "/nfts/explorer",
        method: "GET"
      })
    }),
    getNFTDetailsById: builder.query<NFTDetailsRes, string>({
      query: (id) => ({
        url: `/nfts/item/${id}`,
        method: "GET"
      })
    }),
  }),
});

export const {
  useExplorerNFTSQuery,
  useGetNFTDetailsByIdQuery
} = actions;
