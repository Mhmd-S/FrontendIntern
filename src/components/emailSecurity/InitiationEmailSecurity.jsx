import React from 'react'
import FormField from '../common/FormField'
import Form from '../common/Form'
import useInitiationEmailSecurity from './hooks/useInitiationEmailSecurity'
import FormButton from '../common/FormButton'
import FormGeneralErrorMessage from '../common/FormGeneralErrorMessage'

const InitiationEmailSecurity = () => {

    const { 
            register, 
            handleSubmit, 
            onSubmit,
            generalError, 
            errors,
            loading,
        } = useInitiationEmailSecurity()

  return (
    <div className='w-full h-full grid grid-cols-[50%_50%] grid-rows-1'>
        
        <div className='w-full h-full px-[5.5rem] py-5'>
            <h1 className='w-full text-[5rem]'>
                Email Security Explorer
            </h1>
            <p className='w-full text-xl text-[#9DA4AB]'>
                Over a billion individuals use email on a daily basis across the world. Email has grown to be one of the most vulnerable services, both for users and for businesses.
            </p>
        </div>

        <div className='w-full h-full grid grid-cols-1 grid-rows-[65%_35%] justify-center items-center p-20 '>

            <div className='w-full h-full p-8 grid grid-rows-[10%_90%] grid-cols-1 justify-center items-center rounded-t-3xl bg-[#1E293B] border-b-2 border-b-[#304566] shadow-[inset_5px_5px_15px_10px_#fafafa05]'>

                <FormGeneralErrorMessage generalError={generalError} />

                <Form onSubmit={handleSubmit(onSubmit)} loading={loading}>
                    <FormField
                        label='Email Address'
                        name='email'
                        type='email'
                        register={register}
                        errors={errors}
                        placeholder='ex. john.doe@email.com'
                        validationRules={{
                          required: 'Email is required',
                          pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: 'Invalid Email',
                          },
                        }}
                    />
                    <FormButton text='Initiate Testing' />
                </Form>

            </div>

            <div className='w-full h-full bg-[#182234] flex justify-center items-center rounded-b-3xl shadow-[inset_5px_5px_15px_10px_#fafafa05]'>
                <p className='p-4 text-[#76859A]'>
                    Your email will be tested against attacks such us Phishing, Whailing, Pharming and Spam. Once the attack campaign is done, you will receive an email with the results.
                </p>
            </div>

        </div>

    </div>
  )
}

export default InitiationEmailSecurity