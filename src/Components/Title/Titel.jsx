import React from 'react'
import "./Titel.css"
const Titel = ({subTitle,title}) => {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default Titel