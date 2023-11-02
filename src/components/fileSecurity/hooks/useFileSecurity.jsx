import React, { useState } from 'react'
import InitiationFileSecurity from '../InitiationFileSecurity';
import ScanningFile from '../ScanningFile';

const useFileSecurity = () => {

    const [ step, setStep ] = useState(0);
    const [ file, setFile ] = useState('');

    const renderFileSecurity = () => {
        switch(step) {
            case 0:
                return < InitiationFileSecurity setEmail={setFile} />;
            case 1:
                return < ScanningFile file={file} />;
            default:
                return null;
        }
    }

    return {
        renderFileSecurity
    }
    
}

export default useFileSecurity