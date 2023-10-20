import React from 'react'
import StepIndicator from '../common/StepIndicator'
import EmailNotifications from '../common/EmailNotifications'
import LoadingProccess from '../common/LoadingProccess'
import Result from '../common/Result'

const ScanningEmail = () => {
  const stepsArray = ['Scanning Ports', 'Scanning Filter', 'Scanning Storage', 'Scanning Firmware']
  return (
    <div className='w-full h-full grid grid-cols-[30%_70%] grid-rows-1 px-[5rem] py-[2rem]'>
        <StepIndicator 
            stepsArray={stepsArray} 
            currentStep={2} 
            />
        <div className='w-full h-full flex flex-col items-center justify-evenly bg-[#1E293B] rounded-r-xl shadow-[inset_5px_5px_15px_10px_#fafafa05]'>
          <LoadingProccess percentage='40%'/>
          {/* <Result status='secure' /> */}
          {/* <Result status='secure' /> */}
        </div>
    </div>
  )
}

export default ScanningEmail