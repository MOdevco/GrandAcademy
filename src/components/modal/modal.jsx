import React from 'react'

const Modal = ({children , handleOpen}) => {
  return (
    <div >

      <div className='model-bg' onClick={e => {
        if (!e.target.classList.contains("modalItem")) {
          handleOpen()
        }
      }} >
        <div className='modalItem modal'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal