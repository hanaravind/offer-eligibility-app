import React from 'react'

const Checkbox = ({ value, name, className, onChange, checked }) => {
  return (
    <>
        <input type={'checkbox'} checked={checked} value={value} id={value} name={name} className={className} onChange={onChange} />
        <label className='text-base w-full cursor-pointer' htmlFor={value}>{value}</label>
    </>
  )
}

export default Checkbox