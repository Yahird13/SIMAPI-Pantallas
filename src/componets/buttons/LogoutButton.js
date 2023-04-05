import React from 'react'
import Button from './Button'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons' //https://fontawesome.com/icons/

export default function LogoutButton(props) {
  return (
    <Button icon={faArrowRightFromBracket} iconSize={"2xl"} style={{...props.style, ...style}} onClick={props.onClick}/>
  )
}

const style = {
    background: "#F00E0E",
    width: 100,
    height: "100%",
}