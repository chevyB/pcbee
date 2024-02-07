import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FaUserFriends } from 'react-icons/fa'

import { useUsers } from '@/hooks/redux/useUsers'

const useHooks = () => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const page = parseInt(router.query.page, 10) || 1
    setCurrentPage(page)
  }, [router.query.page])

  const { users, isLoading } = useUsers(currentPage)

  const totalPages = users.last_page || 1

  const onPageChange = (page) => {
    setCurrentPage(page)
    router.push({ pathname: '/users', query: { page } })
  }

  const breadcrumbs = [
    {
      href: '#',
      title: 'Staffs',
      icon: FaUserFriends,
    },
  ]

  return {
    users: users ? users.data : [],
    isLoading,
    totalPages,
    currentPage,
    onPageChange,
    breadcrumbs,
  }
}

export default useHooks
