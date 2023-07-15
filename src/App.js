import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login';

function App() {
  const user = useSelector(selectUser);

  return (
    //BEM naming convention
    <div className="app">
    {user ? (
      <>
        <Sidebar />
        <Chat />
      </>
    ): (
      <Login />
    )}
    
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Chat */}
      {/* <Chat /> */}
    </div>
  );
}

export default App;
