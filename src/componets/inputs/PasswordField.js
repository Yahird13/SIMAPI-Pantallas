import React, { useState } from 'react'
import TextField from './TextField'


export default function EmailField(props) {
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
    id={props.id ? props.id : "password"}
    leftIcon={props.icon} 
    style={{...style.input, backgroundColor: props.backgroundColor}} 
    backgroundStyle={{...style.backgroundStyle, backgroundColor: props.backgroundColor}}
    iconStyle={{...style.icon, backgroundColor: props.leftIconBackgroundColor}}
    placeholder={"Contraseña"} 
    iconSize={"2xl"} 
    rightIcon={rightIcon} 
    onClick={handleClick} 
    rightIconStyle={style.rightIcon}
    rightIconSize={"2xl"}
    rightIconBackgroundColor={props.rightIconBackgroundColor}
    onChange={props.onChange}
    value={props.value}/>
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
        height: 70,
        width: 500, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    icon: {
        backgroundColor: '#00264D',
        height: 70,
        width: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}
