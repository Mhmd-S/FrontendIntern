import { useState } from 'react';
import { useForm } from 'react-hook-form';

const useChangeInfoField = () => {

    const  [generalError, setGeneralError] = useState('');
    const [loading, setLoading] = useState(false);


    const { 
        register, 
        handleSubmit, 
        formState: { errors, isDirty } 
    //   } = useForm({ defaultValues: { bio: user.info }});
      } = useForm();

    const onSubmit = (data) => {

      if (!isDirty) return; // If the field is untouched do nothing

      submitChange(data);
    }
  
    const submitChange = async(data) => {

      setLoading(true);

    //   const response = await userAPI.updateBio(data.bio);
      
      setLoading(false);

    //   if (response.data.status === 'fail') {
    //     setGeneralError(response.data.message);
    //   }
    }

  return {
    register,
    handleSubmit,
    onSubmit,
    loading,
    generalError,
    errors
  }
}

export default useChangeInfoField