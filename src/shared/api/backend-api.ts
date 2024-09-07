import { getCookie } from "cookies-next";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_API_HOST || "/api";
const backendApi = createApi({
  tagTypes: ["BankAccount", "Order", "Profile"],
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = getCookie("token");

      if (token) headers.set("x-access-token", String(token));
      return headers;
    },
  }),
  reducerPath: "api",
  endpoints: () => ({}),
});


export { backendApi };
