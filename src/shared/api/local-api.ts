import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = '/api';
const localApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  reducerPath: 'local-api',
  endpoints: (builder) => ({
    uploadFiles: builder.mutation<string, FormData>({
      query: (body) => ({
        url: "/files",
        method: "POST",
        body
      })
    })
  }),
});

export { localApi };
