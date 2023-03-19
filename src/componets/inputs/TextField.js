import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getContrastColor } from '../utils/ColorInvert';



export default function TextField(props) {

  let { iconStyle: { backgroundColor } = {} } = props;
  const iconColor = backgroundColor ? getContrastColor(backgroundColor) : null;
  let { rightIconBackgroundColor } = props;
  let iconBackgroundColorInvert = rightIconBackgroundColor ? getContrastColor(rightIconBackgroundColor) : null;

  return (
    <div style={props.backgroundStyle}>
        <i style={props.iconStyle}><FontAwesomeIcon icon={props.leftIcon} size={props.iconSize} style={{color: iconColor}}/></i>
        {console.log(iconBackgroundColorInvert)}
        <input type={props.type} style={{...props.style, color: iconBackgroundColorInvert}} id={props.id} placeholder={props.placeholder}/>
        <i style={props.rightIconStyle} onClick={props.onClick}><FontAwesomeIcon icon={props.rightIcon} size={props.rightIconSize} style={{color: iconBackgroundColorInvert}}/></i>
    </div>
  )
}
