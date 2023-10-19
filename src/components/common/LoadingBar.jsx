import React from 'react'

const LoadingBar = ({ percentage }) => {

  return (
    <div className='w-3/4 h-[10px] bg-[#385682] rounded-lg'>
            <div className={`relative w-[${percentage}] h-full bg-[#5297FF] rounded-lg`}>
                <div className='absolute right-0 shadow-[0px_0px_35px_30px_#5297FF2e]'>
                </div>
            </div>
        </div>    
  )
}

export default LoadingBar