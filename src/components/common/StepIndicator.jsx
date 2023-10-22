import React from 'react'
import Step from './Step'

const stepIndicator = ({ stepsArray, currentStep }) => {

  const renderSteps = () => {
    return stepsArray.map((step, index) => {
      return (
        <Step 
          key={index}
          step={step}
          index={index+1}
          isActive={(index+1) <= currentStep}
          />
      )
    })
  }

  return (
    <ul className='w-full h-full px-4 flex rounded-t-xl bg-[#182234] md:rounded-l-xl border-b-2 border-b-blue-500 md:border-r-2 md:border-r-blue-500 md:border-b-0 md:rounded-none md:flex-col justify-evenly items-center shadow-[inset_5px_5px_15px_10px_#fafafa05]'>
        {renderSteps()}
    </ul>
  )
}

export default stepIndicator