import { baseApi } from './baseApi'

export const userApi = baseApi.injectEndpoints({
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      providesTags: ['users'],
      query: (page = 1) => ({ url: `/admin/users?page=${page}` }),
    }),
  }),
})

export const { useGetUsersQuery } = userApi
