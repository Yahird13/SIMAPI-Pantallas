import React from 'react'
import Button from './Button'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons' //https://fontawesome.com/icons/

export default function LogoutButton() {
  return (
    <Button icon={faArrowRightFromBracket} iconSize={"2xl"} style={style} link={"#"}/>
  )
}

const style = {
    background: "#F00E0E",
    width: 100,
    height: 115,
}