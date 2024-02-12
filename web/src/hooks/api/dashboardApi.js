import { baseApi } from './baseApi'

export const dashboardApi = baseApi.injectEndpoints({
  tagTypes: ['dashboard'],
  endpoints: (builder) => ({
    getDashboard: builder.query({
      providesTags: ['dashboard'],
      query: () => ({ url: '/' }),
    }),
  }),
})

export const { useGetDashboardQuery } = dashboardApi