import React from 'react'

export const Button = ({onClick, children, ...props }) => {
  return <button onClick={onClick} {...props}>{children}</button>
}
