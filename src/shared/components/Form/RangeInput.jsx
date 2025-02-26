import React from 'react'
import DropdownIcon from '../../../assets/dropdown-icon.svg'

const RangeInput = ({ containerStyle, min, max }) => {
  return (
    <>
    <div className={`flex gap-1.5 ${containerStyle}`}>
      <div className='relative'>
        <img src={DropdownIcon} className={'absolute w-5 h-5 right-0 top-2'} />
        <input type={'number'} min={min} defaultValue={100} className='cart-input-value indent-2 text-sm h-9 border border-[#ccc] rounded-md' />
      </div>
      <div className='relative'>
        <img src={DropdownIcon} className={'absolute w-5 h-5 right-0 top-2'} />
        <input type={'number'} min={min} defaultValue={200} className='cart-input-value indent-2 text-sm h-9 border border-[#ccc] rounded-md' />
      </div>
    </div>
    </>
  )
}

export default RangeInput