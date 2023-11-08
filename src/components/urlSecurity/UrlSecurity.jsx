import React from 'react'
import useUrlSecurity from './hooks/useUrlSecurity'

const UrlSecurity = () => {

    const { renderUrlSecurity } = useUrlSecurity();

  return (
    <div className='w-full h-full'>
        {renderUrlSecurity()}
    </div>
  )
}

export default UrlSecurity