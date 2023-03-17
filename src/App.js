import React, { Component } from 'react';
import MyNavbar from './componets/Navbar';
import './App.css';
import LoginButton from './componets/buttons/LoginButton';

function App() {
    return (
      <div>
        <MyNavbar />
        <LoginButton/>
      </div>
    );

}

export default App;
