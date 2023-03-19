import React from 'react'
import TextField from './TextField'
import { C_SECUNDARIO, C_TERCIARIO } from '../colors'
import "./style.css"

export default function EmailField(props) {
  return (
    <TextField 
    type={"email"} 
    leftIcon={props.icon} 
    style={style.input} 
    backgroundStyle={style.backgroundStyle}
    rightIconBackgroundColor={C_SECUNDARIO}
    iconStyle={style.icon}
    placeholder={"Correo Electrónico"} iconSize={"2xl"}/>
  )
}

const style = {
    input: {
        border: 'none',
        backgroundColor: 'transparent',
        height: 70,
        width: '100%', 
        outline: 'none',
        fontSize: '20px',
        paddingLeft: 20,
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
