import React from 'react'
import Button from './Button'
import { faGear } from '@fortawesome/free-solid-svg-icons' //https://fontawesome.com/icons/

export default function SettingsButton() {
  return (
    <Button icon={ faGear } iconSize={"2xl"} style={style} link={"#"}/>
  )
}

const style = {
    background: "#969696",
    width: 100,
    height: 115,
}