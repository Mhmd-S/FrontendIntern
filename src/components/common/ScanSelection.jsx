import React from 'react'
import {Link} from 'react-router-dom'
import useScanSelection from './hooks/useScanSelection'
import ChevronIcon from '../icons/ChevronIcon'

const ScanSelection = ({ currentScan }) => {

  const {
    open,
    toggleOpen,
    renderScanSelection,
  } = useScanSelection();

  return (
    <div className='absolute top-4 right-4 w-[90%] h-fit text-white text-center md:top-[9%] md:right-[7.5%] md:w-[85%]'>

      <div className='flex items-center justify-center w-full py-2 rounded-t-3xl bg-[#0E86BD] font-semibold' onClick={toggleOpen} >
        <p className='pr-2'>{ currentScan }</p>
        <span><ChevronIcon /></span>
      </div>
      
      <ul className={`w-full p-2 rounded-b-3xl bg-[#0E86BD] ${!open && 'hidden'} `}>
    
        { renderScanSelection(currentScan) }
      
      </ul>

    </div>
  )
}

export default ScanSelection