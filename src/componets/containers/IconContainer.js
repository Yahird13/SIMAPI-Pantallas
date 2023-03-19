import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { getContrastColor } from '../utils/ColorInvert';

export default function IconContainer(props) {
    let { style: { width, height, borderRadius, backgroundColor, border } = {} } = props;
    width = width ? width : 100;
    height = height ? height : 100;
    borderRadius = borderRadius ? borderRadius : "0%";
    border = border ? border : null;
    const iconColor = backgroundColor ? getContrastColor(backgroundColor) : null;

    const styles = {
        width: width,
        height: height,
        borderRadius: borderRadius,
        display: props.text ? null : "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : null,
        backgroundSize: "cover",
        ...props.style,
        border: null,
    }

    const styleDivIcon = {
      ...styles,
      border: border,
    }

    const styleDivCamilla = {
      backgroundColor: props.colorAlert,
      width: 40,
      height: 20,
      borderRadius: 10,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    }

  return (
    <div style={styles}>
      <div style={styleDivIcon}>
        {props.icon && !props.image ? <FontAwesomeIcon icon={props.icon} size={props.size} style={{color: iconColor}}/> : null}
        {props.image && !props.icon ? <img src={props.image} alt="" width={"auto"} height={height-(height * 0.1)}/> : null}
      </div>
      <div align={"center"}>
        {props.iconCamilla ? <FontAwesomeIcon icon={props.iconCamilla} size={props.size} style={{color: iconColor}}/> : null}
        {props.text ? <p style={{...props.styleText, textAlign: "center", color: iconColor}}>{props.text}</p> : null}
        {props.camilla ? <div style={styleDivCamilla}></div>: null}
      </div>
    </div>
  )
}
