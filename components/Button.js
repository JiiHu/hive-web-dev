import React from 'react'

const Button = ({ children, onClick }) => {
  return (
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
