import React from 'react'

const SelectOption = ({label, value, ...props}) => {
  return (
    <option value={value} {...props}>{label}</option>
  )
}

export default SelectOption