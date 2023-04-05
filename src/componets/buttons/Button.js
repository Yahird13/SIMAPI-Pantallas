import React, { useState, useEffect, useRef } from 'react'
//import { createBrowserHistory } from 'history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getContrastColor } from '../utils/ColorInvert';
import IconContainer from '../containers/IconContainer';
import { faBedPulse } from '@fortawesome/free-solid-svg-icons';

export default function Button(props) {
  //const history = createBrowserHistory();
  let { style: { backgroundColor } = {} } = props
  const { id } = props;
  const textColorBackgroundInvert = backgroundColor ? getContrastColor( backgroundColor) : null;
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const scale = hovered ? 1.1 : 1;

/*   const handleClick = () => {
    history.push(path);
    window.location.reload();
  }  */
  return (
        <button
        id={id}
        style={{ 
          ...styles.button, 
          ...props.style, 
          color: textColorBackgroundInvert, 
          transform: `scale(${scale})`, 
          transition: 'transform 0.3s ease', 
          visibility: props.camilla ? 'hidden' : 'visible',}} 
        onClick={props.onClick} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        type={props.type}>
          {!props.text && props.icon ? <FontAwesomeIcon 
          icon={props.icon} 
          size={props.iconSize}/> : props.text}
        </button>
  )
}

const styles = {
  button: {
    display: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px',
    width: 10,
    fontWeight: 'bold',
    border: 'none',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fontSize: '24px',
  }
}
