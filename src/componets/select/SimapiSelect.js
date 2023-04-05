import React from 'react'
import './style.css'

export default function SimapiSelect(props) {
  return (
    <div style={styles.div}>
      <select className='.custom-select' style={{...styles.select, ...props.styleSelect}}>
          {props.options ? props.options.map((item, index) => {
              return (
                  <option key={index} value={item} >{item}</option>
              );
            }) : null
          }
      </select>
    </div>
  )
}

const styles = {
    select: {
      outline: 'none',
      border: 'none',
      width: 150,
      margin: 5
    },
    div: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 150,
      height: '100%',
      backgroundColor: 'white',
      border: '2px solid black',
      outline: 'none',
      
    }
}
