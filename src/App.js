import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Chat */}
    </div>
  );
}

export default App;
