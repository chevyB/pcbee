import { baseApi } from './baseApi'

export const orderApi = baseApi.injectEndpoints({
  tagTypes: ['orders'],
  endpoints: (build) => ({
    getOrders: build.query({
      providesTags: ['orders'],
      query: () => ({ url: '/orders' }),
    }),

    createOrder: build.mutation({
      invalidatesTags: ['orders'],
      query: (body) => ({
        url: 'orders',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useCreateOrderMutation, useGetOrdersQuery } = orderApi
