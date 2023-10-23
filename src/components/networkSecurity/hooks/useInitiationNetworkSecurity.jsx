import React, { useState} from 'react'
// import { userAPI } from '../../../api/userAPI';
import { useForm } from 'react-hook-form';

const useInitiationNetworkSecurity = ( nextStep ) => {
    
    const [loading, setLoading] = useState(false);
    const [generalError, setGeneralError] = useState(null); 
    const [portRange, setPortRange] = useState('critical');

    const { 
        register, 
        handleSubmit, 
        watch,
        formState: { errors } 
    } = useForm();

    const portRangeWatch = watch('portRange');

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
        portRangeWatch,
        generalError, 
        errors,
        loading,
    }
}

export default useInitiationNetworkSecurity