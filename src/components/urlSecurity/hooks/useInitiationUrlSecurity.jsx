import React, { useState} from 'react'
// import { userAPI } from '../../../api/userAPI';
import { useForm } from 'react-hook-form';

const useInitiationUrlSecurity = ( nextStep ) => {
    
    const [loading, setLoading] = useState(false);
    const [generalError, setGeneralError] = useState(null); 

    const { 
        register, 
        handleSubmit, 
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
        generalError, 
        errors,
        loading,
    }
}

export default useInitiationUrlSecurity