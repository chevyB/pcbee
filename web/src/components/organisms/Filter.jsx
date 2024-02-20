import React from 'react'

const Filter = ({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
}) => {
  return (
    <div className='flex flex-row items-center justify-center mb-4'>
      <input
        type='text'
        placeholder='Search...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='border border-gray-300 rounded-lg px-4 py-2 mr-2'
      />
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className='border border-gray-300 rounded-lg px-4 py-2'
      >
        <option value=''>All Status</option>
        <option value='open'>Open</option>
        <option value='delivered'>In Transit</option>
        <option value='onhold'>On Hold</option>
        <option value='cancelled'>Cancelled</option>
      </select>
    </div>
  )
}

export default Filter
