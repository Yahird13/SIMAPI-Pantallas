import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getContrastColor } from '../utils/ColorInvert';
import { Field } from 'formik';
import "./style.css"


export default function TextField(props) {
  const { required } = props
  let { iconStyle: { backgroundColor } = {} } = props;
  const iconColor = backgroundColor ? getContrastColor(backgroundColor) : null;
  let { rightIconBackgroundColor } = props;
  let iconBackgroundColorInvert = rightIconBackgroundColor ? getContrastColor(rightIconBackgroundColor) : null;

  return (
    <div style={props.backgroundStyle}>
        <i style={props.iconStyle}>{props.leftIcon ? <FontAwesomeIcon icon={props.leftIcon} size={props.iconSize} style={{color: iconColor}}/>: null}</i>
        <input type={props.type} className={`${iconBackgroundColorInvert === "#000000" ? 'input-white' : 'input-black'} ${props.type === 'number' ? 'input-number':''}`} style={{...props.style, color: iconBackgroundColorInvert, }} id={props.id} placeholder={props.placeholder} value={props.value} defaultValue={props.defaultValue} onChange={props.onChange} disabled={props.disabled} required={required === false ? false : true}/>
        <i style={props.rightIconStyle} onClick={props.onClick}>{props.rightIcon ? <FontAwesomeIcon icon={props.rightIcon} size={props.rightIconSize} style={{color: iconBackgroundColorInvert}}/> : null}</i>
    </div>
  )
}
