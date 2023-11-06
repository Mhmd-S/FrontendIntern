import React from 'react'
import { Link } from 'react-router-dom'

const SelectionItem = ({ scanName, scanURL }) => {
  return (
    <Link to={scanURL}>
      <li className='w-full p-3 hover:underline'>{scanName}</li>
    </Link>
  )
}

export default SelectionItem