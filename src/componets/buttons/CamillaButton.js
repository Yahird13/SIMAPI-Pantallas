import React, { useState, useEffect } from 'react'
import { getContrastColor } from '../utils/ColorInvert';
import IconContainer from '../containers/IconContainer';
import { faBedPulse } from '@fortawesome/free-solid-svg-icons';
import './style.css'

const height = 100
const width = 100

export default function CamillaButton(props) {
  let { style: { backgroundColor } = {} } = props
  const { id, estadoCamilla } = props;
  const textColorBackgroundInvert = backgroundColor ? getContrastColor( backgroundColor) : null;
  const [isAlertActive, setIsAlertActive] = useState(props.alert);

  useEffect(() => {
    setIsAlertActive(props.alert)
  }, [props.alert])

  return (
        <button
        disabled={!estadoCamilla}
        id={id}
        style={{ 
          ...styles.button, 
          color: estadoCamilla ? textColorBackgroundInvert: 'gray',
          visibility:'hidden',
          margin: "25%"}} 
        onClick={props.onClick} >
          <IconContainer text={estadoCamilla ? props.textCamilla: 'No disponible'} 
          camilla={true} 
          iconColor={estadoCamilla ? 'black': 'gray'}
          styleText={{fontSize: 15}} 
          iconCamilla={ faBedPulse }
          size={"2x"} 
          className={estadoCamilla ? isAlertActive ? 'blink' : '': ''}
          style={{
            height: height, 
            with: width, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            visibility: 'visible',}}/>
        </button>
  )
}

export let turnOffAlert

const styles = {
  button: {
    display: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px',
    width: width,
    height: height,
    fontWeight: 'bold',
    border: 'none',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fontSize: '24px',
  }
}
