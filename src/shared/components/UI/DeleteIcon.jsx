import React from 'react'

const DeleteIcon = ({ icon, containerStyle, iconStyle, onClick }) => {
  return (
      <span className={`delete-icon cursor-pointer pl-1 ${containerStyle}`} onClick={onClick}>
          <img src={icon} className={iconStyle} />
      </span>
  )
}

export default DeleteIcon