import React from 'react'
import AccountMenu from './AccountMenu'

import { Outlet } from "react-router-dom";

const Account = () => {

    return (
      <div className='w-full h-full grid grid-cols-1 grid-rows-[10%_90%] justify-evenly items-center px-32'>
          <h1 className='w-full h-full text-5xl font-bold'>
              Account
          </h1>
    
          <div className='w-full h-full px-4 grid grid-rows-[15%_85%] md:grid-cols-[30%_70%] md:grid-rows-1 md:px-[3rem] py-[1rem]'>
            <AccountMenu />
            <Outlet />
          </div>
    
      </div>
    )
}

export default Account