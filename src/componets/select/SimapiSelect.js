import React from 'react'

export default function SimapiSelect(props) {
  return (
    <div style={{...props.style, ...styles.div}}>
      <select style={{
        outline: 'none',
        border: 'none',
        width: '100%',
        height: 35,
      }}>
          {props.options ? props.options.map((item, index) => {
              return (
                  <option key={index} value={item.value}>{item.label}</option>
              );
            }) : null
          }
      </select>
    </div>
  )
}

const styles = {
    div: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 150,
      height: 40,
      backgroundColor: 'white',
      border: '2px solid black',
      outline: 'none',
      
    }
}
