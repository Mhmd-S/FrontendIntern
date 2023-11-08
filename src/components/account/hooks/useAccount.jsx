import React, { useState } from 'react'

const useAccount = () => {

    const [ accountContent, setAccountContent ] = useState('account information');

    const handleSetAccountContent = (content) => {
        setAccountContent(content);
    }

    const renderAccountContent = () => {
        switch(accountContent) {
            case 'account information':
                return <div>Account Information</div>
            case 'parameters settings':
                return <div>Parameters Settings</div>
            case 'results':
                return <div>Results</div>
            default:
                return <div>Account Information</div>
        }
    }

    return {
        accountContent,
        handleSetAccountContent,
        renderAccountContent
    }

}

export default useAccount