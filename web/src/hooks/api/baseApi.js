// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getToken } from '../lib/tokenStorage'

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseApi = createApi({
  reducerPath: 'api',
  tagTypes: ['Auth'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API || 'http://localhost:8000/api',
    mode: 'cors',
    prepareHeaders: (headers) => {
      const token = getToken()

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      headers.set('Access-Control-Allow-Origin', '*')
      return headers
    },
    validateStatus(response) {
      if (response.status >= 200 && response.status <= 299) return true
      if (response.status === 401) {
        // TODO: Logout function
        // logoutUser('/login')
      }
      if (response.status === 503) {
        location.href = '/maintenance'
      }
      return false
    },
  }),
  endpoints: () => ({}),
})
