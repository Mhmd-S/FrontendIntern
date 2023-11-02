import React from 'react'
import StepIndicator from '../common/StepIndicator'
import LoadingProccess from '../common/LoadingProccess'
import Result from '../common/Result'

const ScanningFile = () => {
  const stepsArray = ['Scanning Hexs', 'Scanning Binary', 'Scanning Spoofing', 'Scanning Malware']
  return (
    <div className='w-full h-full px-4 grid grid-rows-[15%_85%] md:grid-cols-[30%_70%] md:grid-rows-1 md:px-[5rem] py-[2rem]'>
        
        <StepIndicator 
            stepsArray={stepsArray} 
            currentStep={2} 
            />

        <div className='w-full h-full flex flex-col items-center justify-evenly bg-[#1E293B] rounded-b-xl md:rounded-none md:rounded-r-xl shadow-[inset_5px_5px_15px_10px_#fafafa05]'>
          
          <h1 className='text-4xl'>
            {stepsArray[0]}
          
          </h1>
          
          <LoadingProccess percentage={40}/>
          {/* <Result status='secure' /> */}
          {/* <Result status='secure' /> */}
        
        </div>
    
    </div>
  )
}

export default ScanningFile