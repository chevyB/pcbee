import Navbar from '@/components/organisms/Navbar'
import Sidebar from '@/components/organisms/SideBar'

const Template = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen bg-white text-gray-800'>
      <Navbar />
      <div className='flex-1 flex'>
        <Sidebar />
        <div className='px-8 py-4 w-full'>{children}</div>
      </div>
    </div>
  )
}

export default Template;
