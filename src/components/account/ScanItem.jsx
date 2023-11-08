import React from 'react'
import CheckmarkIcon from '../icons/CheckmarkIcon'
import LoadingIcon from '../icons/LoadingIcon'
import WarningIcon from '../icons/WarningIcon'

const ScanItem = ({ scanInfo }) => {
  return (
    <div className='w-full h-fit flex items-center justify-evenly border-y-blue-500 border-y-[1px] p-3'>

        <div className='w-1/2 flex flex-col'>
            <p>
                Test #{scanInfo.number}
            </p>
            <p>
                Status: {scanInfo.status}
            </p>
            <p>
                Test Type: {scanInfo.type}
            </p>
            <p>
                Time: {new Date(scanInfo.time * 1000).toISOString().substr(14, 5)}
            </p>

            { scanInfo?.result && (
                <p>
                    Result: {scanInfo.result}
                </p>
            )}

        </div>

        <div className='w-1/2 flex items-center justify-center'>
            {
                scanInfo?.result ? 
                    (scanInfo.result !== 'No vulnerabilities found' ?  
                    <WarningIcon/> 
                    : 
                    <CheckmarkIcon color='#0EA5E9' />)
                :
                    <LoadingIcon />
            }
        </div>

    </div>
  )
}

export default ScanItem