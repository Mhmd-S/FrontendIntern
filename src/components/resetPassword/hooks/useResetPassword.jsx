import React, { useState } from 'react'
import RequestResetPasswordForm from '../RequestResetPasswordForm';

const useResetPassword = () => {

    const [ step, setStep ] = useState(0);

    const nextStep = () => {
        setStep(step + 1);
    }

    const renderResetPassword = () => {
        switch(step) {
            case 0:
                return(<RequestResetPasswordForm nextStep={nextStep} />);
            default:
                return(null);
        }
    }

  return {
    renderResetPassword
  }
}

export default useResetPassword