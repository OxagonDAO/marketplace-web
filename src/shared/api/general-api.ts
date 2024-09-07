import { backendApi } from ".";
import { BankRate } from "./types";

const actions = backendApi.injectEndpoints({
    endpoints: (builder) => ({
        getBanksRate: builder.query<BankRate[], void>({
            query: () => ({
                url: "/general/rates",           
            })
        })
    })
})

export const { useGetBanksRateQuery, useLazyGetBanksRateQuery} = actions