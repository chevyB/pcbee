import { useMemo, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { baseApi } from '@/hooks/api/baseApi'
import { authApi } from '@/hooks/api/authApi'
import { setToken, removeToken } from '@/hooks/lib/tokenStorage'

export const useUser = () => {
  const dispatch = useDispatch()
  const { data, isError, isLoading } = authApi.useGetUserQuery()

  const user = useMemo(
    () => data || null, [data])

  const logout = useCallback(() => {
    removeToken()
    dispatch(baseApi.util.resetApiState())
  }, [user, dispatch])

  const login = useCallback((token) => {
    setToken(token)
    dispatch(baseApi.util.resetApiState())
  }, [user, dispatch])
  

  return {
    user,
    isError,
    isLoading,
    login,
    logout,
  }
}
