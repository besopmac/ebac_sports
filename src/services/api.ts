import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/ebac_sports'
  }),

  endpoints: (builder) => ({
    getProducts: builder.query<Produto[], void>({
      query: () => 'products'
    })
  })
})

export const { useGetProductsQuery } = api

export default api
