import React, { useEffect, useState } from 'react'
import { dummyData } from '../dummyData';

const useHistoryTable = () => {
    const [ scans, setScan ] = useState(null);
    const [ page, setPage ] = useState(1);
    const [ limit, setLimit ] = useState(10);
    const [ total, setTotal ] = useState(0);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);


    useEffect(() => {
      // Fetch Scans
    })

    const renderTable = () => {
        return (
            <div className='relative w-full h-full overflow-auto p-1 md:p-3 bg-[#182234] grid grid-cols-table grid-rows-auto rounded-3xl md:grid-cols-6 '>
                
                <div className='sticky w-full border-b-2 p-2'>#</div>
                <div className='sticky w-full border-b-2 p-2'>IP Address</div>
                <div className='sticky w-full border-b-2 p-2'>Port Range</div>
                <div className='sticky w-full border-b-2 p-2'>Time Taken</div>
                <div className='sticky w-full border-b-2 p-2'>Date</div>
                <div className='sticky w-full border-b-2 p-2'>Status</div>
                
                {dummyData.map((item, index) => (
                    <React.Fragment key={index}>
                        <p className='w-max p-2'>{index}</p>
                        <p className='w-max p-2'>{item.ipAddress}</p>
                        <p className='w-max p-2'>{item.portRange}</p>
                        <p className='w-max p-2'>{item.timeTaken}</p>
                        <p className='w-max p-2'>{item.date}</p>
                        <p className='w-max p-2'>{item.status}</p>
                    </React.Fragment>
                ))}
            </div>
         )
    }

    return{
        renderTable,

    }

}

export default useHistoryTable