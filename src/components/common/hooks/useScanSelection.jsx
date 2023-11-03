import React, { useState, useEffect } from 'react'
import SelectionItem from '../SelectionItem';

const useScanSelection = () => {

    const [open, setOpen] = useState(false)
    
    const scanMenu = { 'File Scan': '/file-security', 'Network Scan': '/network-security', 'URL Scan': '/url-security', 'Email Scan': '/email-security' };

    const toggleOpen = () => {
        setOpen(!open)
    }

    const renderScanSelection = (currentScan) => {
        const scanMenuKeys = Object.keys(scanMenu);
        return scanMenuKeys.map((scan, index) => {
            if (currentScan === scan) return null
            return (
               <SelectionItem key={index} scanName={scan} scanURL={scanMenu[scan]} />
            )
        })
    }


    return {
        open,
        toggleOpen,
        renderScanSelection,
    }

}

export default useScanSelection