import Link from 'next/link';
import { HiLogout } from "react-icons/hi";

const Navbar = () => {
    return (
<nav className="bg-gray-50 dark:bg-gray-800 p-2">
      <div className="px-4 flex justify-between items-center">
        <Link href="/" className="font-bold">
        PC Bee Parts Ordering System
        </Link>
        
        <HiLogout className="cursor-pointer">
          Logout
        </HiLogout>

    </div>
</nav>
    )
}

export default Navbar;