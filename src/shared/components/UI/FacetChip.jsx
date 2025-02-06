import React from 'react'
import XIcon from '../../../assets/x-icon-monk.svg';

const FacetChip = ({data, onClick}) => {
  return (
      <div key={data.value} className='facet-chips bg-[#ccc] rounded-xl text-[10px] items-center flex gap-.5 px-1'>
          <span>{data.value}</span>
          <img onClick={() => onClick(data)} src={XIcon} className="w-4 h-5 cursor-pointer" />
      </div>
  )
}

export default FacetChip