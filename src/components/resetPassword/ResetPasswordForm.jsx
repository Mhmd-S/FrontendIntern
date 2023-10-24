import React from 'react'
import Form from '../common/Form'
import FormField from '../common/FormField'
import FormButton from '../common/FormButton'
import FormGeneralErrorMessage from '../common/FormGeneralErrorMessage'
import userResetPasswordForm from './hooks/userResetPasswordForm'

const ResetPasswordForm = () => {

    const  {
        register,
        handleSubmit,
        generalErrorMessage,
        errors
    } = userResetPasswordForm();

  return (
    <div className='w-full h-full flex flex-col justify-evenly items-center'>
        
        <h1 className='text-4xl'>
            Reset Password
        </h1>

        <div className='w-full h-full bg-[#1E293B] rounded-t-3xl px-6 border-b-[#304566] shadow-[inset_5px_5px_15px_10px_#fafafa05]'>
            <Form>
                {/* <FormGeneralErrorMessage message={}/> */}
                <FormField
                    type='password'
                    name='password'
                    placeholder='Password'
                    label='New Password:'
                    register={register}
                    errors={errors}
                    validationRules={
                        {
                            required: 'New password is required',
                        }
                    }
                />

                <FormField
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    label='Confirm Password:'
                    register={register}
                    errors={errors}
                    validationRules={
                        {
                            required: 'Confirm password is required',
                        }
                    }
                />

                <FormButton text='Send Email'/>
            </Form>
        </div>

    </div>
  )
}

export default ResetPasswordForm