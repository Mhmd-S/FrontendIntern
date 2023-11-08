import React from 'react'
import useFileSecurity from './hooks/useFileSecurity'

const FileSecurity = () => {

    const { renderFileSecurity } = useFileSecurity();

  return (
    <div className='w-full h-full'>
        {renderFileSecurity()}
    </div>
  )
}

export default FileSecurity