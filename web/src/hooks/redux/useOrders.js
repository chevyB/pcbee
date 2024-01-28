import { useMemo } from 'react'

import { orderApi } from '../api/orderApi'

export const useOrders = () => {
  const { data, isError, isLoading } = orderApi.useGetOrdersQuery()

  const orders = useMemo(() => data?.orders || [], [data])

  return {
    orders,
    isError,
    isLoading,
  }
}
