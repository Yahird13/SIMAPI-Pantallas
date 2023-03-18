import React, { Component } from 'react';
import MyNavbar from './componets/Navbar';
import './App.css';
import LoginButton from './componets/buttons/LoginButton';
import { LoginScreen } from './screens/LoginScreen';

function App() {
    return (
      <div>
        <LoginScreen/>
      </div>
    );

}

export default App;
