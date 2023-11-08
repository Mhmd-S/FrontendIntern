import React from 'react'
import useHistoryTable from './hooks/useHistoryTable'
import FormButton from '../common/FormButton';

const HistoryTable = ({ scanType }) => {

    const { renderTable } = useHistoryTable();

  return (
    <div className=' bg-[#1E293B] rounded-3xl p-6 w-full h-full grid grid-cols-1 grid-rows-[15%_85%] items-center'>
            
    <div className='w-full h-full flex justify-between items-center md:px-10'>
        <h1 className='font-bold text-3xl md:block'>
            History
        </h1>

        <FormButton text='Details' />
    </div>

        {renderTable()}

    </div>
  )
}

export default HistoryTable