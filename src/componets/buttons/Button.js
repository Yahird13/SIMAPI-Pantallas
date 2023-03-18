import React from 'react'
import { createBrowserHistory } from 'history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button(props) {
  const history = createBrowserHistory();
  /* const handleClick = () => {
    props.onClick();
    history.push(props.path);
    window.location.reload();
  } */
  return (
    <>
        <button 
        style={Object.assign({}, styles.button, props.style)} 
        onClick={props.onClick} >
          {!props.text ? <FontAwesomeIcon icon={props.icon} size={props.iconSize}/> : props.text}
        </button>
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
