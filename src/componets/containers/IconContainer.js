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
        ...props.style,
        border: null,
    }

    const styleDivIcon = {
      ...styles,
      border: border,
    }

    const styleDivCamilla = {
      backgroundColor: props.colorAlert,
      borderRadius: 10,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    }

  return (
    <div style={styles} align={'center'}>
      {props.camilla ? null : (
      <div style={styleDivIcon} align={'center'}>
        {props.icon && !props.image ? <FontAwesomeIcon icon={props.icon} size={props.size} style={{color: iconColor}}/> : null}
        {props.image && !props.icon ? <img src={props.image} width={100-(100 * 0.1)} height={100-(100 * 0.1)}/> : null}
      </div>
      )}
      <div style={{
        display: "flow",
        alignItems: "center",
        justifyContent: "left",
      }}>
        {props.iconCamilla ? <FontAwesomeIcon icon={props.iconCamilla} className={props.className} size={props.size} style={{color: props.iconColor}}/> : null}
        {props.text ? <p style={{...props.styleText, textAlign: "center", color: iconColor}} id={props.idText}>{props.text}<br/>{props.numeroCamilla? `(${props.numeroCamilla})` : null}</p> : null}
      </div>
    </div>
  )
}
