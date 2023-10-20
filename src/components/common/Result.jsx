import React from 'react'
import WarningIcon from '../icons/WarningIcon'
import { Link } from 'react-router-dom'
import CheckmarkIcon from '../icons/CheckmarkIcon'


const Result = ({ status }) => {

  const resultObj = status === 'secure' ? {
    icon: <CheckmarkIcon color='#B1CC33' />,
    title: 'You are secure!',
    description: "If you believe your account security may be at risk. \n Please contact us. Your protection is our priority, and we're here to help.",
    textColor: 'text-[#B1CC33]',
  } : {
    icon: <WarningIcon color='#9E2323' />,
    title: 'Oh no - You have been compromised!',
    description: "We believe your account security may be at risk. \n Your protection is our priority, and we're here to help.",
    textColor: 'text-[#9E2323]',
  }
  
  return (
    <div className='w-full h-full flex flex-col items-center justify-evenly'>
      <h1 className='text-3xl'>
        Result
      </h1>

      { resultObj.icon }
      
      <h2 className={`text-3xl font-bold ${resultObj.textColor} `}>
        {resultObj.title}
      </h2>
      
      <p className='w-2/3 text-xl whitespace-pre-wrap text-center'>
        {resultObj.description}
      </p>
      
      <Link to='contact-us'>
        <button className='bg-[#0EA5E9] px-4 py-2 rounded-md'>
          Contact Us
        </button>
      </Link>
    </div>
  )
}
  export default Result

