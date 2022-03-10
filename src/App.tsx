import React from 'react';
import logo from './logo.svg';
import './App.css';
// them thanh phan Login trong thu muc pages/login/index.tsx
import Login from './pages/login';
import Students from './pages/student';

function App() {
  return (
    <div className="App">
      {/* Them view Login vao trong App */}
      


      <header className="App-header">
        <Login />
        <Students />
      </header>
    </div>
  );
}

export default App;
