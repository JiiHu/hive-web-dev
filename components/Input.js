import React from 'react'

const Input = ({ value, onChange }) => {
  return (
    <input
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      type="text"
      onChange={e => onChange(e.target.value)}
      value={value}
    />
  )
}

export default Input
