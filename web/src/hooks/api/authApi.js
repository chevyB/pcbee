import { baseApi } from './baseApi'

export const authApi = baseApi.injectEndpoints({
  tagTypes: ['Auth'],
  endpoints: (build) => ({
    user: build.query({
      query: (id) => ({ url: 'auth' }),
      providesTags: ['Auth'],
    }),
    login: build.mutation({
      query(body) {
        return {
          url: 'login',
          method: 'POST',
          body,
        }
      },
      invalidatesTags: ['Auth'],
    }),
  }),
  overrideExisting: false,
})

export const { useLoginMutation } = authApi
