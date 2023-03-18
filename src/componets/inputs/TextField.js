import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TextField(props) {
  return (
    <div style={props.backgroundStyle}>
        <i style={props.iconStyle}><FontAwesomeIcon icon={props.leftIcon} size="2xl" inverse/></i>
        <input type={props.type} style={props.style} id={props.id} placeholder={props.placeholder}/>
        <i><FontAwesomeIcon icon={props.rightIcon}/></i>
    </div>
  )
}
