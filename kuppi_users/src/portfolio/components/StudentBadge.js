import React from 'react'

const StudentBadge = ({image, studentName, university, description}) => {
  return (
    <div className='w-[250px] h-[350px] flex flex-col items-center px-6 py-12 gap-5 rounded-lg bg-gray-100 hover:shadow-lg cursor-pointer'>
        <img src={image} alt="-" className='w-20 h-20 rounded-full bg-gray-200 object-contain'/>
        <div className='flex flex-col gap-[1px] items-center'>
            <span className='text-[14pt] font-medium'>{studentName}</span>
            <span className='font-normal text-[10pt] text-green-500'>{university}</span>
        </div>
        <p className='w-full text-center text-[12pt] font-light'>{description.length >= 81 ? description.slice(0,78) + '...' : description}</p>
    </div>
  )
}

export default StudentBadge