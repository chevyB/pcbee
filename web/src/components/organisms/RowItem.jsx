import React from 'react'

const RowItem = ({ label, value, icon }) => {
  return (
    <div className='flex flex-col py-3 border-b border-gray-200 min-w-48'>
      <span className='font-semibold'>{label}:</span>
      <span className='flex items-center'>
        {!!icon && icon}
        <span>{value}</span>
      </span>
    </div>
  )
}

export default RowItem
