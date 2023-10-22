import React from 'react'
import LoadingBar from './LoadingBar'

const LoadingProccess = ({ percentage }) => {
  return (
    <div className='w-full h-3/4 flex flex-col justify-evenly items-center'>
        <LoadingBar percentage={percentage}/>
        <h3 className='text-2xl text-[#C7DDFF]'>
            {percentage}% completed
        </h3>
    </div>
  )
}

export default LoadingProccess