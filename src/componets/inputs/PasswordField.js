import React, { useState } from 'react'
import TextField from './TextField'
import { C_SECUNDARIO, C_TERCIARIO } from '../colors'
import "./style.css"

export default function PasswordField(props) {
  let iconShowPass = props.passIcons[0];
  let iconHidePass = props.passIcons[1];

  const [showPass, setShowPass] = useState(false);
  const [rightIcon, setRightIcon] = useState(iconShowPass);

  const handleClick = () => {
    setShowPass(!showPass);
    if (showPass) {
      setRightIcon(iconShowPass);
    } else {
      setRightIcon(iconHidePass);
    }
  }

  return (
    <TextField 
    type={showPass ? "text" : "password"} 
    leftIcon={props.icon} 
    style={style.input} 
    backgroundStyle={style.backgroundStyle}
    iconStyle={style.icon}
    placeholder={"Contraseña"} 
    iconSize={"2xl"} 
    rightIcon={rightIcon} 
    onClick={handleClick} 
    rightIconStyle={style.rightIcon}
    rightIconSize={"2xl"}
    rightIconBackgroundColor={C_SECUNDARIO}/>
  )
}

const style = {
    input: {
        border: 'none',
        backgroundColor: 'transparent',
        height: 70,
        width: '86%', 
        outline: 'none',
        fontSize: '20px',
        paddingLeft: 20,
    },
    rightIcon: {
        height: 70,
        width: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundStyle: {
        backgroundColor: C_SECUNDARIO,
        height: 70,
        width: 500, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    icon: {
        backgroundColor: C_TERCIARIO,
        height: 70,
        width: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}
