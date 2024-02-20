import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FaTasks } from 'react-icons/fa'

import { formatDate } from '@/hooks/lib/util'
import { useOrders } from '@/hooks/redux/useOrders'

const useHooks = () => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

  useEffect(() => {
    const page = parseInt(router.query.page, 10) || 1
    setCurrentPage(page)
  }, [router.query.page])

  const { orders, isLoading } = useOrders(
    currentPage,
    searchQuery,
    statusFilter,
  )

  const totalPages = orders.last_page || 1
  const filteredOrders = orders?.data?.filter(
    (order) =>
      order.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      formatDate(order.created_at).includes(searchQuery.toLowerCase()) ||
      order.category.label.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const statusFilteredOrders =
    statusFilter ?
      filteredOrders.filter(
        (order) => order.status.toLowerCase() === statusFilter.toLowerCase(),
      )
    : filteredOrders
  const onPageChange = (page) => {
    setCurrentPage(page)
    router.push({ pathname: '/orders', query: { page } })
  }

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
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    filteredOrders,
    statusFilteredOrders,
  }
}

export default useHooks
