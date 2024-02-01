// Pagination.jsx
import { Pagination as FlowbitePagination } from 'flowbite-react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className='flex overflow-x-auto sm:justify-center'>
      <FlowbitePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default Pagination
