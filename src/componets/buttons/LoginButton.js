import React from 'react'
import Button from './Button'
import { C_PRIMARIO } from '../colors'

export default function LoginButton() {
  return (
    <Button text={"Iniciar Sesión"} style={style} link={"/navbar"}/>
  )
}

const style = {
    backgroundColor: C_PRIMARIO,
    width: 423,
    height: 84,
}