import React, { useState } from 'react'
import InitiationNetworkSecurity from '../InitiationNetworkSecurity';
import ScanningNetwork from '../ScanningNetwork';

const useNetworkSecurity = () => {

    const [ step, setStep ] = useState(1);
    const [ email, setEmail ] = useState('');

    const renderNetworkSecurity = () => {
        switch(step) {
            case 0:
                return < InitiationNetworkSecurity setEmail={setEmail} />;
            case 1:
                return < ScanningNetwork email={email} />;
            default:
                return null;
        }
    }

    return {
        renderNetworkSecurity
    }
    
}

export default useNetworkSecurity