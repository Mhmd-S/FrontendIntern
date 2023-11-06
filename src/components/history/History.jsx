import FormButton from '../common/FormButton';
import PrimaryButton from '../common/PrimaryButton';
import HistoryMenu from './HIstoryMenu';
import { dummyData } from './dummyData';
import useHistory from './hooks/useHistory';
import React from 'react';

const History = () => {

    const { renderHistory, handleSetScanType } = useHistory();

  return (
    <div className='w-full h-full grid grid-cols-1 grid-rows-[15%_80%] gap-4 p-4 md:grid-cols-[20%_70%] md:grid-rows-1 md:items-center md:justify-center md:gap-20'>
        
        <HistoryMenu handleSetScanType={handleSetScanType} />

        {renderHistory()}
    </div>
  )
}

export default History