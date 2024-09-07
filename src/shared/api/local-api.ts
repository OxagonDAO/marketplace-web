import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = '/api';
const localApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  reducerPath: 'local-api',
  endpoints: () => ({}),
});

export { localApi };
