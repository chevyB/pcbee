import Link from 'next/link';
import { HiLogout } from "react-icons/hi";

const Navbar = () => {
    return (
<nav className="bg-gray-50 dark:bg-gray-800 p-2 text-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-black font-bold justify-center">
        PC Bee Parts Ordering System
        </Link>
        
        <HiLogout className="text-gray-900 hover:underline cursor-pointer">
          Logout
        </HiLogout>

    </div>
</nav>
    )
}

export default Navbar;