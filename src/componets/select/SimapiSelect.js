import React from 'react'

export default function SimapiSelect(props) {

  const { width, height } = props.style

  return (
    <div style={{...props.style, ...styles.div, 
      width: width ? width : 150,
      height: height ? height : 40,}}>
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
      backgroundColor: 'white',
      border: '2px solid black',
      outline: 'none',
      
    }
}
