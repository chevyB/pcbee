import Navbar from '@/components/organisms/atoms/Navbar'
import Sidebar from '@/components/organisms/atoms/SideBar'

const Template = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen bg-white dark:bg-gray-900'>
      <Navbar />
      <div className='flex-1 flex'>
        <Sidebar />
        <div className='bg-white dark:bg-gray-900 p-4'>{children}</div>
      </div>
    </div>
  )
}

export default Template
