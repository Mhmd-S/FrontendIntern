import React from 'react'
import useEmailSecurity from './hooks/useEmailSecurity'

const EmailSecurity = () => {

    const { renderEmailSecurity } = useEmailSecurity();

  return (
    <div className='w-full h-full'>
        {renderEmailSecurity()}
    </div>
  )
}

export default EmailSecurity