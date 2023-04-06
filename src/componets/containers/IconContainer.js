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
    <div style={styles} align={'center'}>
      <div style={styleDivIcon} align={'center'}>
        {props.icon && !props.image ? <FontAwesomeIcon icon={props.icon} size={props.size} style={{color: iconColor}}/> : null}
        {props.image && !props.icon ? <img src={props.image} width={100-(100 * 0.1)} height={100-(100 * 0.1)}/> : null}
      </div>
      <div align={"center"}>
        {props.iconCamilla ? <FontAwesomeIcon icon={props.iconCamilla} className={props.className} size={props.size} style={{color: props.iconColor, marginLeft: '-75%'}}/> : null}
        {props.text ? <p style={{...props.styleText, textAlign: "center", color: iconColor, marginLeft: '-75%'}} id={props.idText}>{props.text}</p> : null}
      </div>
    </div>
  )
}
