import React from 'react'
import FormField from '../common/FormField'
import Form from '../common/Form'
import useInitiationNetworkSecurity from './hooks/useInitiationNetworkSecurity'
import FormButton from '../common/FormButton'
import FormGeneralErrorMessage from '../common/FormGeneralErrorMessage'

const InitiationNetworkSecurity = () => {

    const { 
        register, 
        handleSubmit, 
        onSubmit,
        generalError, 
        errors,
        loading,
    } = useInitiationNetworkSecurity()

    return (
        <div className='w-full h-full p-4 grid grid-rows-[30%_65%] grid-cols-1 items-center md:grid-cols-[50%_50%] md:grid-rows-1'>
            <div className='w-full h-full flex flex-col items-center justify-center px-4 md:px-[5.5rem] md:h-fit md:items-start'>
            <h1 className='w-full py-8 text-3xl text-center leading-tight md:py-4 md:text-[5rem] md:text-start'>
                        Network Security Explorer
                </h1>
                <p className='hideen w-full text-xl text-[#9DA4AB] text-center md:block md:text-start'>
                        Network security is a critical component of any organization's security strategy. It involves the protection of hardware, software, and data from unauthorized access, use, disclosure, disruption, modification, or destruction.
                </p>
            </div>

            <div className='w-full h-5/6 p-4 grid grid-cols-1 grid-rows-[75%_25%] justify-center items-center md:p-20 md:h-full'>
                <div className='w-full h-full p-4 grid grid-rows-[10%_90%] grid-cols-1 justify-center items-center rounded-t-3xl bg-[#1E293B] border-b-2 border-b-[#304566] shadow-[inset_5px_5px_15px_10px_#fafafa05]'>
                    <FormGeneralErrorMessage generalError={generalError} />
                    <Form onSubmit={handleSubmit(onSubmit)} loading={loading}>
                            <FormField
                                    label='IP Address'
                                    name='ipAddress'
                                    type='text'
                                    register={register}
                                    errors={errors}
                                    placeholder='ex. 192.168.0.1'
                                    validationRules={{
                                        required: 'IP Address is required',
                                        pattern: {
                                            value: /^([0-9]{1,3}\.){3}[0-9]{1,3}$/,
                                            message: 'Invalid IP Address',
                                        },
                                    }}
                            />
                            <FormField
                                    label='Port'
                                    name='port'
                                    type='number'
                                    register={register}
                                    errors={errors}
                                    placeholder='ex. 80'
                                    validationRules={{
                                        required: 'Port is required',
                                        min: {
                                            value: 1,
                                                        message: 'Port must be greater than 0',
                                                    },
                                                    max: {
                                                        value: 65535,
                                                        message: 'Port must be less than or equal to 65535',
                                                    },
                                                }}
                                        />
                            <FormButton text='Initiate Testing' />
                        </Form>
                    </div>

                    <div className='w-full h-full bg-[#182234] flex justify-center items-center rounded-b-3xl shadow-[inset_5px_5px_15px_10px_#fafafa05]'>
                            <p className='p-4 text-[#76859A]'>
                                Your network will be tested against attacks such as port scanning, denial of service, and SQL injection.
                            </p>
                    </div>
            
            </div>
        
        </div>
    )
}

export default InitiationNetworkSecurity
