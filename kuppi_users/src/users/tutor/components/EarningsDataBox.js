import React from 'react'

const EarningsDataBox = ({moduleImage, module, purchased, price}) => {
  return (
    <div className='w-full h-full flex flex-row rounded-lg shadow-lg p-6 bg-white gap-5'>
        <img src={moduleImage} alt="module-image" className='w-[200px] h-[90px] object-cover rounded-lg'/>
        <div className='w-full h-full flex flex-row justify-center items-center'>
            <span className='w-6/12 text-[16pt] font-semibold'>{module}</span>
            <span className='w-4/12 text-[14pt] text-gray-400 font-medium'>Purchased: {purchased}</span>
            <span className='w-2/12 text-[14pt] text-right text-blue-500 font-medium'>Rs.{price}</span>
        </div>
    </div>
  )
}

export default EarningsDataBox