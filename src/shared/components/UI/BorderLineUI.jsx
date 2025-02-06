import React from 'react'

const BorderLineUI = () => {
  return (
      <div className='border-line-container absolute -top-[10px] -left-[55px]'>
          <div className='border-top border-b border-[#ccc] w-[30px] relative left-[25px]'></div>
          <div className='border-straight w-[70px] absolute top-[35px] border-b border-[#ccc] -left-[10px] rotate-90'></div>
          <div className='border-bottom absolute border-b border-[#ccc] bottom-0 w-[30px] top-[70px] left-[25px]'></div>
          <span className='border-text absolute top-[25px] text-sm bg-white -right-[10px]'>AND</span>
      </div>
  )
}

export default BorderLineUI