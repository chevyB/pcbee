import * as React from 'react'
import { useRouter } from 'next/router'

import { useUser } from '@/hooks/redux/auth'


/**
 * Make user as logged out and guide to login page
 */
export default function LogoutPage() {
  const router = useRouter()
  const { logout } = useUser()

  React.useEffect(() => {
    logout()
    router.push('/login')
  }, [router])

  return null
}
