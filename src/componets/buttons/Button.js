import React from 'react'
import { createBrowserHistory } from 'history';

export default function Button(props) {
  const history = createBrowserHistory();
  const handleClick = () => {
    history.push(props.link);
    window.location.reload();
  }
  return (
    <>
        <button style={Object.assign({}, styles.button, props.style)} onClick={handleClick}>{props.text}</button>
    </>
  )
}

const styles = {
    button: {
        color: 'black',
        borderRadius: '15px',
        width: 10,
        fontWeight: 'bold',
        border: 'none',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontSize: '24px',
    }
}
