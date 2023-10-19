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
    <ul className='w-full h-full px-10 bg-[#182234] rounded-l-xl border-r-2 border-r-blue-500 flex flex-col justify-evenly items-center shadow-[inset_5px_5px_15px_10px_#fafafa05]'>
        {renderSteps()}
    </ul>
  )
}

export default stepIndicator