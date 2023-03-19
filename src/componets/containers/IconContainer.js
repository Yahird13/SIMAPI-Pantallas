import React from 'react'

export default function IconContainer(props) {
    const widthD = props.style.width ? props.style.width : "100"
    const heightD = props.style.height ? props.style.height : "100"

    const styles = {
        width: widthD,
        height: heightD,
        borderRadius: "50%",
        ...props.style
    }


  return (
    <div style={styles}>
        IconContainer
    </div>
  )
}
