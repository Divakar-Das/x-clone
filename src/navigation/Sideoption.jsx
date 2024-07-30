import React from 'react'
import "./Sideoption.css"

const Sideoption = ({active, text, Icon}) => {
  return (
    <div className={`sideoption ${active && 'sideoption--active'}`}>
        <Icon/>
        <h4>{text}</h4>
    </div>
  )
}

export default Sideoption