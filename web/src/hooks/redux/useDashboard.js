import { useMemo } from 'react'

import { dashboardApi } from '../api/dashboardApi'

export const useDashboard = () => {
  const { data, isError, isLoading } = dashboardApi.useGetDashboardQuery()

  const dashboard = useMemo(() => data?.dashboard.data || [], [data])

  return {
    dashboard,
    isError,
    isLoading,
  }
}
