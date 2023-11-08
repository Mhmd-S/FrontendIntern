import React from 'react'
import { Link } from 'react-router-dom'
import FormButton from '../common/FormButton'

const MenuItem = ({ itemInfo }) => {
  return (
    <div className='bg-[#1E293B] rounded-lg flex flex-col items-center justify-evenly shadow-[inset_5px_5px_15px_10px_#fafafa05]'>
        <p className='text-2xl font-bold'>
            {itemInfo.name}
        </p>

        {itemInfo.icon}

        <Link to={itemInfo.url} >
            <FormButton text='Start Scanning'/>
        </Link>
    </div>
  )
}

export default MenuItem