import React from 'react'
import FormField from '../common/FormField'
import Form from '../common/Form'
import useInitiationUrlSecurity from './hooks/useInitiationUrlSecurity'
import FormButton from '../common/FormButton'
import FormGeneralErrorMessage from '../common/FormGeneralErrorMessage'
import ScanSelection from '../common/ScanSelection'

const InitiationUrlSecurity = () => {

    const { 
            register, 
            handleSubmit, 
            onSubmit,
            generalError, 
            errors,
            loading,
        } = useInitiationUrlSecurity()

  return (
    <div className='w-full h-full p-4 grid grid-rows-[25%_75%] grid-cols-1 items-center md:grid-cols-[50%_50%] md:grid-rows-1'>
        
        <div className='w-full h-full flex flex-col items-center justify-center px-4 md:px-[5.5rem] md:h-fit md:items-start'>
            <h1 className='w-full py-8 text-3xl text-center leading-tight md:py-4 md:text-[5rem] md:text-start'>
                Url Security Explorer
            </h1>
            <p className="w-full text-sm text-[#9DA4AB] text-center md:block md:text-start md:text-lg">
                Over a billion individuals use websites on a daily basis across the world. Url has grown to be one of the most vulnerable services, both for users and for businesses.
            </p>
        </div>

        <div className="relative w-full h-5/6 p-4 grid grid-cols-1 grid-rows-[75%_25%] justify-center items-center md:p-12 md:h-full">
      
      <div className="w-full h-full p-4 grid grid-rows-[10%_90%] grid-cols-1 justify-center items-center rounded-t-3xl bg-[#1E293B] border-b-2 border-b-[#304566] shadow-[inset_5px_5px_15px_10px_#fafafa05]">
    
        <FormGeneralErrorMessage generalError={generalError} />

        <Form onSubmit={handleSubmit(onSubmit)} loading={loading}>

            <FormField
                label='Url Address / Ip Address'
                name='url'
                type='url'
                register={register}
                errors={errors}
                placeholder='ex. google.com'
                validationRules={{
                  required: 'Url is required',
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: 'Invalid Url',
                  },
                }}
            />
            
            <FormButton text='Initiate Testing' />
            
        </Form> 

    </div>

    <div className='w-full h-full bg-[#182234] flex justify-center items-center rounded-b-3xl shadow-[inset_5px_5px_15px_10px_#fafafa05]'>
        <p className='p-4 text-[#76859A]'>
            Your email will be tested against attacks such us Phishing, Whailing, Pharming and Spam.
        </p>
    </div>

    <ScanSelection currentScan='Url Scan' />

    </div>

    </div>
  )
}

export default InitiationUrlSecurity