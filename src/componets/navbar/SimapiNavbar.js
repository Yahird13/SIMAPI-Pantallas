import React from 'react'
import { Link } from 'react-router-dom'
import SettingsButton from '../buttons/SettingsButton'
import { C_PRIMARIO } from '../colors' 
import LogoutButton from '../buttons/LogoutButton'

export default function SimapiNavbar(props) {
    let navbarItems = props.navbarItems
  return (
    <nav style={styles.navbar}>
        <div style={styles.logoContainer}>

        </div>
        <SettingsButton style={styles.settingsButton}/>
        <div style={styles.divLinks}>
            <ul style={styles.ul}>
                {navbarItems ? navbarItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link to={item.path} style={styles.Link}>{item.text}</Link>
                        </li>
                    )
                }): null}
            </ul>
        </div>
        <LogoutButton style={styles.logoutButton}/>
    </nav>
  )
}

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '130px',
        width: '100%',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1,
        backgroundColor: 'white',
    },
    ul: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        listStyle: 'none',
        overflow: 'hidden',
    },
    Link: {
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold',
        fontSize: '24px',
    },
    logoContainer: {
        width: '10%',
        height: '100%',
        border: '1px solid black',
    },
    divLinks: {
        paddingRight: '50px',
        paddingTop: '10px',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: C_PRIMARIO,
        color: 'black',
        borderRadius: '15px',
        fontWeight: 'bold',
        border: 'none',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontSize: '24px',
        marginLeft: '50px',
        marginRight: '50px',
    },
    settingsButton: {
        marginLeft: '50px',
    },
    logoutButton: {
        marginLeft: '50px',
    }
}