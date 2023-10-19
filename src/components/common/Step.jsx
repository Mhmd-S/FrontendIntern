import React from 'react'

const Step = ({ isActive, index, step }) => {
  return (
    <li className='w-full h-fit flex items-center'>
        {/* Step Number */}
        <p className={`${isActive ? 'bg-[#BE185D]' : 'bg-[rgba(233,71,152,0.3)]' } text-xl rounded-full px-5 py-3 border-2 border-[#E94797]`}>
            {index} 
        </p>
        {/* Step description or name */}
        <p className='pl-10 text-xl'>
            {step}
        </p>
    </li>
  )
}

export default Step