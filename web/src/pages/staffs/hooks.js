import { FaUserFriends } from 'react-icons/fa'

import { useUsers } from '@/hooks/redux/useUsers'

const useHooks = () => {
  const { users, isLoading } = useUsers()

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
    breadcrumbs,
  }
}

export default useHooks
