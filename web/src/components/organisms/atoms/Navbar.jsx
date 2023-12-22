import Link from 'next/link'
import { HiLogout } from 'react-icons/hi'

const Navbar = () => {
  return (
    <nav className='p-3 px-8 flex justify-between items-center bg-gray-50 dark:bg-gray-800'>
      <Link href='/' className='font-bold'>
        PC Bee Parts Ordering System
      </Link>

      <Link href='/logout'>
        <HiLogout className='cursor-pointer'>Logout</HiLogout>
      </Link>
    </nav>
  )
}

export default Navbar
