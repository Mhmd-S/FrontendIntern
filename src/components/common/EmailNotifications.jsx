import React from 'react'

const EmailNotifications = () => {
  return (
    <div className='w-full h-3/4 px-5 py-4 flex flex-col justify-between items-center'>
        <h1 className='w-full text-4xl text-center'>
            Notice
        </h1>
        <h3 className='w-full text-3xl text-center px-[5.5rem] whitespace-pre-wrap'>
            We have sent you an email.{'\n'}
            Please open the email if found.{'\n'}
            Otherwise, click the button below.
        </h3>
        <button className='px-4 py-2 bg-[#BE185D] rounded-md'>
            Email not found
        </button>
    </div>
  )
}

export default EmailNotifications