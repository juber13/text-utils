import React from 'react'

const Button = ({val , text , color , handleFunc}) => {
  return (
    <div className="btn-container" >
      <button disabled={val.length === 0}  onClick={handleFunc}  className={`text-white font-bold text-xs p-2 rounded-sm shadow-md disabled:read-only:`} style={{background : color}}>{text}</button>
    </div>
  )
}

export default Button