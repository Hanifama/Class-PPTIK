import React from 'react'
import { FaCrown } from 'react-icons/fa'

const SectionHead = ({icon, title, className}) => {
  return (
    <div className="section__head">
        <span>{icon}</span>
        <h2>{title}</h2>
        <div>{className}</div>
    </div>
  )
}

export default SectionHead