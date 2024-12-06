import React from 'react'

const ServiceBadge = ({icon, headline, description}) => {
    
  return (
    <div className='w-[350px] h-[200px] flex flex-col gap-6 border-none bg-white text-black hover:shadow-xl p-6 rounded-xl'>
        <div className='w-full h-auto flex flex-row px-3 justify-between items-center'>
            <img src={icon} alt="-" className='w-12 h-12 p-2 bg-gray-300 object-contain rounded-lg'/>
            <span className='font-bold text-[16pt]'>{headline}</span>
        </div>
        <p className='w-auto h-20 font-normal text-[10pt]'>
            {description.length >= 96 ? description.slice(0,96) + '...' : description}
        </p>
        <a href="/" className='text-blue-500 w-fit align-bottom'>Learn More</a>
    </div>
  )
}

export default ServiceBadge