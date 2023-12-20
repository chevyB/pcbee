import Link from 'next/link';
import { HiTemplate, HiOutlineShoppingBag, HiOutlineUsers } from "react-icons/hi";

const Links = [
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
      label: 'Staffs',
      icon: <HiOutlineUsers />,
      link: '/staffs'
    }
  ]

const Sidebar = () => {
    return (
        <aside className="left-0 z-40 w-64 h-screen bg-gray-50 dark:bg-gray-800">
            <div className="h-full pl-2 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                    {Links.map((item) => (
                        <li key={item.label}>
                        <Link href={item.link} passHref className="py-3 flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        {item.icon}
                    <   span className="ms-3">{item.label}</span>
                    </Link>
              </li>
            ))}
          </ul>
        </div>
</aside>
    )
}

export default Sidebar;
