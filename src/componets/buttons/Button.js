import React, {useState} from 'react'
//import { createBrowserHistory } from 'history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getContrastColor } from '../utils/ColorInvert';
import IconContainer from '../containers/IconContainer';
import { faBedPulse } from '@fortawesome/free-solid-svg-icons';

export default function Button(props) {
  //const history = createBrowserHistory();
  let { style: { backgroundColor } = {} } = props;
  const textColorBackgroundInvert = backgroundColor ? getContrastColor(props.style.backgroundColor) : null;
  let alert = props.alert ? 'red' : 'gray';
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const scale = hovered ? 1.1 : 1;

  /* const handleClick = () => {
    props.onClick();
    history.push(props.path);
    window.location.reload();
  } */
  return (
    <>
        <button 
        style={{ 
          ...styles.button, 
          ...props.style, 
          color: textColorBackgroundInvert, 
          transform: `scale(${scale})`, 
          transition: 'transform 0.3s ease', 
          visibility: props.camilla ? 'hidden' : 'visible',}} 
        onClick={props.onClick} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} >
          {!props.text && props.icon ? <FontAwesomeIcon 
          icon={props.icon} 
          size={props.iconSize}/> : props.text}
          {props.camilla ? <IconContainer text={"Camilla"} 
          camilla={true} 
          colorAlert={alert}  
          styleText={{fontSize: 10}} 
          iconCamilla={ faBedPulse } 
          size={"2x"} 
          style={{
            height: 100, 
            with: 100, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            visibility: 'visible',
            margin: 30}}/> :null}
        </button>
    </>
  )
}

const styles = {
  button: {
    display: 'flex',
    flexDirection: 'row',
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
