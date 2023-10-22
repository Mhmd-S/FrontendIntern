import React from 'react'

const FormButton = ({ onClick, text, loading }) => {
  return (
    <button 
      onClick={onClick} 
      className={`w-[fit] my-2 px-4 py-3 bg-[#0EA5E9] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:animate-pulse`}
      disabled={loading}
      >
        {loading ? 'Processing' :text}
    </button>
  )
}

export default FormButton