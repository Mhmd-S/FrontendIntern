import React from 'react'
import FormButton from '../common/FormButton'

const HistoryMenu = ({handleSetScanType}) => {
  return (
    <div className='w-full h-full bg-[#1E293B] rounded-2xl p-2 md:grid md:grid-rows-[60%_40%] md:grid-cols-1'>

            <div className='hidden w-full h-full  flex-col items-center justify-evenly md:flex'>

                <img src='./vite.svg' className='w-20 h-20 rounded-full border-2 border-sky-500' />

                <p className='text-3xl'>
                    John Doe
                </p>

                <p className='text-sm'>
                    jj@gmail.com
                </p>

            
                <FormButton text='Edit Profile'/>
            </div>

            <ul className='w-full h-full p-1 flex justify-evenly items-center text-center bg-[#182234] rounded-2xl md:flex-col md:items-start md:pl-10 [*&>]:hover:bg-black'>

                <li className='hidden md:block font-bold underline underline-offset-4'>
                    SCAN TYPES
                </li>

                <li className='hover:underline cursor-pointer bg-[#ffffff19] p-1 rounded-lg' onClick={()=>handleSetScanType('fileScan')}>
                    File Scan
                </li>

                <li className='hover:underline cursor-pointer p-1' onClick={()=>handleSetScanType('urlScan')}>
                    URL Scan
                </li>

                <li className='hover:underline cursor-pointer p-1' onClick={()=>handleSetScanType('networkScan')}>
                    Network Scan
                </li>

                <li className='hover:underline cursor-pointer p-1' onClick={()=>handleSetScanType('emailScan')}>
                    Email Scan
                </li>

            </ul>

        </div>

  )
}

export default HistoryMenu