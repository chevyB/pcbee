import { useMemo, useCallback } from 'react'

import { baseApi } from '@/hooks/api/baseApi'
import { authApi } from '@/hooks/api/authApi'
import { setToken, removeToken } from '@/hooks/lib/tokenStorage'

export const useUser = () => {
  const { data, isError, isLoading } = authApi.useGetUserQuery()

  const user = useMemo(() => data || null, [data])

  const logout = useCallback(() => {
    removeToken()
    baseApi.util.resetApiState()
  }, [user])

  const login = useCallback(
    (token) => {
      setToken(token)
      baseApi.util.resetApiState()
    },
    [user],
  )

  return {
    user,
    isError,
    isLoading,
    login,
    logout,
  }
}
