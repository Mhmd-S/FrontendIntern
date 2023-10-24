import React from 'react'
import Form from '../common/Form'
import FormField from '../common/FormField'
import FormButton from '../common/FormButton'
import FormGeneralErrorMessage from '../common/FormGeneralErrorMessage'
import useRequestResetPasswordForm from './hooks/useRequestResetPasswordForm'

const RequestResetPasswordForm = () => {

    const  {
        register,
        handleSubmit,
        generalErrorMessage,
        errors
    } = useRequestResetPasswordForm();

  return (
    <div className='w-full h-full flex flex-col justify-evenly items-center'>
        
        <h1 className='text-4xl'>
            Reset Password
        </h1>

        <div className='w-3/4 h-3/6 md:w-1/3 md:h-3/5 grid grid-cols-1 grid-rows-[65%_35%]'>

            <div className='w-full h-full bg-[#1E293B] rounded-t-3xl px-6 border-b-[#304566] shadow-[inset_5px_5px_15px_10px_#fafafa05]'>
                <Form>
                    <FormGeneralErrorMessage message={generalErrorMessage}/>
                    <FormField
                        type='email'
                        name='email'
                        placeholder='Email'
                        label='Email Address:'
                        register={register}
                        errors={errors}
                        validationRules={
                            {
                                required: 'Email is required',
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Please enter a valid email'
                                }
                            }
                        }
                    />
                    <FormButton text='Send Email'/>
                </Form>
            </div>

            <div className='bg-[#182234] flex justify-center items-center rounded-b-3xl shadow-[inset_5px_5px_15px_10px_#fafafa05]'>
                <p className='p-4 text-[#76859A]'>
                    An email will be sent to your account containing the link to reset your password
                </p>
            </div> 

        </div>

    </div>
  )
}

export default RequestResetPasswordForm