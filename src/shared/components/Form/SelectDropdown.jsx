import React from 'react'
import DropdownIcon from '../../../assets/dropdown-icon.svg'

const SelectDropdown = ({ defaultValue, containerStyle, children, onChange, ...props }) => {
  return (
    <>
      <img src={DropdownIcon} className={'absolute w-5 h-5 right-0 top-2'} />
      <select className={`${containerStyle}`} defaultValue={defaultValue} onChange={onChange} {...props}>
        {children}
      </select>
    </>
  )
}

export default SelectDropdown