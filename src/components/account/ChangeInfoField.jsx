import React from 'react'
import Form from '../common/Form'
import FormButton from '../common/FormButton'
import FormField from '../common/FormField'
import FormGeneralErrorMessage from '../common/FormGeneralErrorMessage'
import useChangeInfoField from './hooks/useChangeInfoField'

const ChangeInfoField = ({ name }) => {

  const {
    register,
    handleSubmit,
    onSubmit,
    generalError,
    errors
  } = useChangeInfoField();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
 
      <div className='w-full h-full p-4 border-b-[1px] border-b-sky-500 '>

        <h1 className='text-2xl p-2 mb-2 w-full font-bold text-grey-900'>
          Edit Your {name}
        </h1>  

        <FormGeneralErrorMessage message={generalError} />

        <FormField 
            type='text' 
            name={name} 
            register={register}
            errors={errors}
            placeholder={name}
            validationRules={
              {
                required: `${name} is required`,
                minLength: {
                  value: 3,
                  message: `${name} needs to be atleast 3 characters`
                },
              }
            }
            />
      </div>

      <div className='w-full h-fit  flex justify-end py-2 px-4 shadow-[inset_5px_5px_15px_10px_#fafafa07]'>
        <FormButton text='Save' />
      </div>

    </Form>
  )
}

export default ChangeInfoField