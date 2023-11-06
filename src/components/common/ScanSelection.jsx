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
    <div className={`absolute top-4 select-none right-4 w-[90%] h-fit text-white text-center cursor-pointer  md:top-[9%] md:right-[7.5%] md:w-[85%] rounded-t-3xl ${open ?  'bg-[#1E293B] border-[1px] border-sky-500 rounded-b-3xl' : 'bg-[#0e86bd93] '}`}>

      <div className={`flex items-center justify-center w-full py-2 rounded-t-3xl font-semibold  `} onClick={toggleOpen} >
        <p className='pr-2'>{ currentScan }</p>
        <span className={` transition-all  ${open && 'rotate-180'} `}><ChevronIcon /></span>
      </div>
      
      <ul className={`-translate-y-0 h-fit w-full transition-all rounded-b-3xl opacity-100  ${!open && 'invisible opacity-10 h-0 top-0 -translate-y-4' } `}>
    
        { renderScanSelection(currentScan) }
      
      </ul>

    </div>
  )
}

export default ScanSelection