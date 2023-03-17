import React from 'react'

export default function Button(props) {
  return (
    <>
        <button style={(!props.style) ? styles.button : props.style}>{props.text}</button>
    </>
  )
}

const styles = {
    button: {
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: '10px',
        width: 10,
    }   
}
