import React from 'react'
import { ImBin } from "react-icons/im"

const UploadedSessionBox = ({index,kuppiImage,kuppiName}) => {
  return (
    <div className='w-full h-full flex flex-row rounded-lg px-6 py-4 bg-gray-200 gap-5 hover:shadow-lg'>
        <div className='flex flex-row items-center gap-4'>
            <span className='text-[14pt] font-semibold'>{index+1}.</span>
            <img src={kuppiImage} alt="module-image" className='w-[200px] h-[90px] object-cover rounded-lg'/>
        </div>
        <div className='w-full h-auto flex flex-row items-center justify-between'>
            <span className='w-6/12 h-auto text-[16pt] font-semibold'>{kuppiName}</span>
            <ImBin className='w-auto text-[14pt] text-red-500 cursor-pointer'/>
        </div>
    </div>
  )
}

export default UploadedSessionBox