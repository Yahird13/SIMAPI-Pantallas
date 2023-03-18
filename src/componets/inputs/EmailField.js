import React from 'react'
import TextField from './TextField'
import { C_SECUNDARIO, C_TERCIARIO } from '../colors'

export default function EmailField(props) {
  return (
    <TextField 
    type={"email"} 
    leftIcon={props.icon} 
    style={style.input} 
    backgroundStyle={style.backgroundStyle}
    iconStyle={style.icon}
    placeholder={"email"}/>
  )
}

const style = {
    input: {
        border: 'none',
        backgroundColor: 'transparent',
        height: 70,
        width: '100%', 
    },
    backgroundStyle: {
        backgroundColor: C_SECUNDARIO,
        height: 70,
        width: 500, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    icon: {
        backgroundColor: C_TERCIARIO,
        height: 70,
        width: 70,
    }
}
