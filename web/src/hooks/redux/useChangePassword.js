import { useMemo } from 'react'

import { changePasswordApi } from '../api/changePasswordApi'

export const useChangePassword = () => {
  const { data, isError, isLoading } = changePasswordApi.useGetOrdersQuery()

  const users = useMemo(() => data?.users || [], [data])

  return {
    users,
    isError,
    isLoading,
  }
}
