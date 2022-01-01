
import React from 'react';
import Navbar from './components/Navbar';
import Chatroom from './components/Chatroom';
import './App.scss';


function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Chatroom></Chatroom>
    </React.Fragment>
  );
}

export default App;
