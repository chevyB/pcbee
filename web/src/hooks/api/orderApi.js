import { baseApi } from './baseApi'

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (body) => ({
        url: 'orders',
        method: 'POST',
        body,
      }),
    }),
    // Add other order-related endpoints as needed...
  }),
  overrideExisting: false,
})

export const { useCreateOrderMutation } = orderApi
