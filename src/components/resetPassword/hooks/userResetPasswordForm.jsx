import React, { useState } from 'react'

const userResetPasswordForm = () => {
    const [generalErrorMessage, setGeneralErrorMessage] = useState('')

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

export default userResetPasswordForm