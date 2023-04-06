import React from 'react'
import TextField from './TextField'
import { C_SECUNDARIO, C_TERCIARIO } from '../Colors'



export default function EmailField(props) {
  return (
    <TextField 
    type={"email"} 
    id={props.id ? props.id : "email"}
    leftIcon={props.icon} 
    style={style.input} 
    backgroundStyle={style.backgroundStyle}
    rightIconBackgroundColor={'#385273'}
    iconStyle={style.icon}
    placeholder={"Correo Electrónico"} iconSize={"2xl"}
    onChange={props.onChange}
    value={props.value}/>
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
        backgroundColor: '#385273',
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
