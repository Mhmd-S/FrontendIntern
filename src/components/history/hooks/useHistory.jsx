import React, { useState } from 'react'
import HistoryTable from '../HistoryTable';

const useHistory = () => {

    const [scanType, setScanType] = useState(null)
    
    const renderHistory = () => {
        return <HistoryTable scanType={scanType} />
    };

    const handleSetScanType = (scanType) => {
        setScanType(scanType);
    }

    return {
      renderHistory,
      handleSetScanType
    }
}

export default useHistory