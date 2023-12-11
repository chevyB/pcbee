import { baseApi } from './baseApi'

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    tagTypes: ['Auth'],
    getUser: build.query({
      query: () => ({ url: 'auth' }),
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
    logout: build.mutation({
      query() {
        return {
          url: 'logout',
          method: 'POST',
        }
      },
      invalidatesTags: ['Auth'],
    }),
  }),
  overrideExisting: false,
})

export const { useGetUserQuery, useLoginMutation, useLogoutMutation } = authApi
