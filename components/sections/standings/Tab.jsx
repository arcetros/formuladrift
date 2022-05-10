import React from 'react'

const Tab = ({ children, active, onClick }) => {
  return (
    <span
      className={`relative text-lg cursor-pointer font-primary text-white uppercase opacity-50 ${
        active && 'border-b-2 border-red-500 opacity-100'
      }`}
      onClick={onClick}
      aria-hidden={true}
    >
      {children}
    </span>
  )
}

export default Tab
