import React, { useState } from 'react'
import InitiationUrlSecurity from '../InitiationUrlSecurity';
import ScanningUrl from '../ScanningUrl';

const useUrlSecurity = () => {

    const [ step, setStep ] = useState(0);
    const [ url, setUrl ] = useState('');

    const renderUrlSecurity = () => {
        switch(step) {
            case 0:
                return < InitiationUrlSecurity setUrl={setUrl} />;
            case 1:
                return < ScanningUrl url={url} />;
            default:
                return null;
        }
    }

    return {
        renderUrlSecurity
    }
    
}

export default useUrlSecurity