import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='relative'>
        <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary border-opacity-50'></div>
        <div className='absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-gray-300 opacity-20'></div>
      </div>
    </div>
  )
}

export default Loader