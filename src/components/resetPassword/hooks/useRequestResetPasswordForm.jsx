import React from 'react'
import { useForm } from 'react-hook-form'

const useRequestResetPasswordForm = () => {

    const [generalErrorMessage, setGeneralErrorMessage] = React.useState('')

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return {
        register,
        handleSubmit,
        generalErrorMessage,
        errors
    }
}

export default useRequestResetPasswordForm