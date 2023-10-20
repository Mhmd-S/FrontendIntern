import React from 'react'
import useNetworkSecurity from './hooks/useNetworkSecurity'

const NetworkSecurity = () => {

    const { renderNetworkSecurity } = useNetworkSecurity();

  return (
    <div className='w-full h-full'>
        {renderNetworkSecurity()}
    </div>
  )
}

export default NetworkSecurity