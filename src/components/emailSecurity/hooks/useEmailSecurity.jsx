import React, { useState } from 'react'
import InitiationEmailSecurity from '../InitiationEmailSecurity';
import ScanningEmail from '../ScanningEmail';

const useEmailSecurity = () => {

    const [ step, setStep ] = useState(1);
    const [ email, setEmail ] = useState('');

    const renderEmailSecurity = () => {
        switch(step) {
            case 0:
                return < InitiationEmailSecurity setEmail={setEmail} />;
            case 1:
                return < ScanningEmail email={email} />;
            default:
                return null;
        }
    }

    return {
        renderEmailSecurity
    }
    
}

export default useEmailSecurity