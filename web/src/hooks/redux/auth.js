import { useCallback, useMemo } from 'react'

import { authApi } from '@/hooks/api/authApi'
import { baseApi } from '@/hooks/api/baseApi'
import { removeToken, setToken } from '@/hooks/lib/tokenStorage'

export const useUser = () => {
  const { data, isError, isLoading } = authApi.useGetUserQuery()

  const user = useMemo(() => data || null, [data])

  const logout = useCallback(() => {
    removeToken()
    baseApi.util.resetApiState()
  }, [])

  const login = useCallback((token) => {
    setToken(token)
    baseApi.util.resetApiState()
  }, [])

  return {
    user,
    isError,
    isLoading,
    login,
    logout,
  }
}
