import Image from 'next/image'
import Link from 'next/link'
import { HiLogout } from 'react-icons/hi'

const Navbar = () => {
  return (
    <nav className='p-3 px-8 flex justify-between items-center bg-gray-50'>
      <Link href='/' className='font-bold flex items-center'>
        <Image src='/logo.png' width={30} height={30} alt="logo"/>
        <span className='px-2'>PC Bee Parts Ordering System</span>
      </Link>

      <Link href='/logout'>
        <HiLogout className='cursor-pointer'>Logout</HiLogout>
      </Link>
    </nav>
  )
}

export default Navbar
