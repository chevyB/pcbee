import { useRouter } from 'next/router'
import { useState } from 'react'
import { FaUserFriends } from 'react-icons/fa'

import { useUsers } from '@/hooks/redux/useUsers'

const useHooks = () => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(router.query.page || 1)

  const { users, totalPages, isLoading } = useUsers(currentPage)

  const onPageChange = (page) => {
    setCurrentPage(page)
    router.push({ pathname: '/staffs', query: { page } })
  }

  const breadcrumbs = [
    {
      href: '#',
      title: 'Staffs',
      icon: FaUserFriends,
    },
  ]

  return {
    users,
    isLoading,
    totalPages,
    currentPage,
    onPageChange,
    breadcrumbs,
  }
}

export default useHooks
