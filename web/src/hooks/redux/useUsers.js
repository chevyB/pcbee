import { useMemo } from 'react'

import { userApi } from '../api/userApi'

export const useUsers = (page) => {
  const { data, isError, isLoading } = userApi.useGetUsersQuery(page)

  const users = useMemo(() => data?.users || [], [data])

  return {
    users,
    isError,
    isLoading,
  }
}
