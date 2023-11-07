import React from 'react'

const AccountMenu = () => {
  return (
    <ul className='w-full h-full px-4 flex rounded-t-xl bg-[#182234] md:rounded-l-xl border-b-2 border-b-blue-500 md:border-r-2 md:border-r-blue-500 md:border-b-0 md:rounded-none md:flex-col justify-evenly items-center shadow-[inset_5px_5px_15px_10px_#fafafa05]'>
        <li>
            Account Information
        </li>
        <li>
            Parameters Settings
        </li>
        <li>
            Results
        </li>
        <li className='w-full flex items-center justify-center'>
          <button className='w-1/2 bg-red-600 py-2'>
            Sign out
          </button>
        </li>
    </ul>
  )
}

export default AccountMenu