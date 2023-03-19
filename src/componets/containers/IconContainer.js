import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { getContrastColor } from '../utils/ColorInvert';

export default function IconContainer(props) {
    let { style: { width, height, borderRadius, backgroundColor } = {} } = props;
    width = width ? width : 100;
    height = height ? height : 100;
    borderRadius = borderRadius ? borderRadius : "0%";
    const iconColor = backgroundColor ? getContrastColor(backgroundColor) : null;

    const styles = {
        width: width,
        height: height,
        border: "1px solid black",
        borderRadius: borderRadius,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : null,
        backgroundSize: "cover",
        ...props.style
    }

  return (
    <div style={styles}>
      {props.icon ? <FontAwesomeIcon icon={props.icon} size={props.size} style={{color: iconColor}}/> : null}
      {props.image ? <img src={props.image} alt="" width={"auto"} height={height-(height * 0.1)}/> : null}        
    </div>
  )
}
