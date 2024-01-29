import { useState } from 'react'
import { FaTasks } from 'react-icons/fa'

import { useOrders } from '@/hooks/redux/useOrders'

const useHooks = () => {
  const { orders, isLoading } = useOrders()

  const totalPages = 100
  const [currentPage, setCurrentPage] = useState(1)
  const onPageChange = (page) => setCurrentPage(page)

  const breadcrumbs = [
    {
      href: '/orders',
      title: 'Orders',
      icon: FaTasks,
    },
  ]

  return {
    orders,
    isLoading,
    breadcrumbs,
    totalPages,
    currentPage,
    onPageChange,
  }
}

export default useHooks
