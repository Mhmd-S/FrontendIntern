import React from 'react'
import { Link } from 'react-router-dom'

const SelectionItem = ({ scanName, scanURL }) => {
  return (
    <Link to={scanURL}>
      <li>{scanName}</li>
    </Link>
  )
}

export default SelectionItem