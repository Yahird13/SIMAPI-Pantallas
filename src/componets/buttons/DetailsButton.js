import React from 'react'
import Button from './Button'

export default function DetailsButton() {
  return (
    <Button text={"Ver detalles"} style={style} link={"#"}/>
  )
}

const style = {
    backgroundColor: "#1B8CF4",
    width: 175,
    height: 52,
}