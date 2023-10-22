import React from 'react'

const Step = ({ isActive, index, step }) => {
  return (
    <li className='w-full h-fit flex items-center'>
        {/* Step Number */}
        <p className={`${isActive ? 'bg-[#BE185D]' : 'bg-[rgba(233,71,152,0.3)]' } text-xl rounded-full px-4 py-2 border-2 border-[#E94797]`}>
            {index} 
        </p>
        {/* Step description or name */}
        <p className='hidden pl-4 text-xl md:block overflow-x-wrap'>
            {step}
        </p>
    </li>
  )
}

export default Step