import React from 'react'
//import { createBrowserHistory } from 'history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getContrastColor } from '../utils/ColorInvert';
import IconContainer from '../containers/IconContainer';
import { faBedPulse } from '@fortawesome/free-solid-svg-icons';

export default function Button(props) {
  //const history = createBrowserHistory();
  let { style: { backgroundColor } = {} } = props;
  const textColorBackgroundInvert = backgroundColor ? getContrastColor(props.style.backgroundColor) : null;
  /* const handleClick = () => {
    props.onClick();
    history.push(props.path);
    window.location.reload();
  } */
  return (
    <>
        <button 
        style={{ ...styles.button, ...props.style, color: textColorBackgroundInvert}} 
        onClick={props.onClick} >
          {!props.text ? <FontAwesomeIcon icon={props.icon} size={props.iconSize}/> : props.text}
          
        </button>
        <IconContainer text={"Camilla"} camilla={true} colorAlert={'red'}  styleText={{fontSize: 10}} iconCamilla={ faBedPulse } size={"5x"} style={{height: 100, with: 100}}/>
    </>
  )
}

const styles = {
    button: {
        borderRadius: '15px',
        width: 10,
        fontWeight: 'bold',
        border: 'none',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontSize: '24px',
    }
}
