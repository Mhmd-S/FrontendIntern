import React, { useState} from 'react'
// import { userAPI } from '../../../api/userAPI';
import { useForm } from 'react-hook-form';

const useInitiationFileSecurity = ( nextStep ) => {
    
    const [loading, setLoading] = useState(false);
    const [generalError, setGeneralError] = useState(null); 

    const { 
        register, 
        handleSubmit, 
        resetField,
        setError,
        formState: { errors } 
    } = useForm();


    const onSubmit = async(data) => {
            
        setGeneralError('');
        setLoading(true);
        
        // const response = await userAPI.blablah(data);
        
        // if (response.data.status === 'success') {
        //     nextStep();
        // } else {
        //     setGeneralError(response.data.message);
        //     setLoading(false);
        // }
    }

    return { 
        register, 
        handleSubmit, 
        onSubmit,
        resetField,
        setError,
        generalError, 
        errors,
        loading,
    }
}

export default useInitiationFileSecurity