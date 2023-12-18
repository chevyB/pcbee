// Layout.js

import { HiTemplate, HiOutlineShoppingBag, HiOutlineUsers } from "react-icons/hi";
import Link from 'next/link';

const SidebarData = [
  {
    label: 'Dashboard',
    icon: <HiTemplate />,
    link: '/'
  },
  {
    label: 'Orders',
    icon: <HiOutlineShoppingBag />,
    link: '/orders'
  },
  {
    label: 'Staff',
    icon: <HiOutlineUsers />,
    link: '/staff'
  }
];

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-gray-50 dark:bg-gray-800">
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {SidebarData.map((item) => (
              <li key={item.label}>
                <Link href={item.link} passHref className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    {item.icon}
                    <span className="ms-3">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Navbar */}
        <nav className="bg-gray-50 dark:bg-gray-800 p-4 text-center">
          <div className="container mx-auto">
            <Link href="/" className="text-black text-xl font-bold">
              PC Bee Parts Ordering System
            </Link>
          </div>
        </nav>
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 dark:bg-gray-800">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
