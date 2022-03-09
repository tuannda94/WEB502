import React from 'react';
import logo from './logo.svg';
import './App.css';
// them thanh phan Login trong thu muc pages/login/index.tsx
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      {/* Them view Login vao trong App */}
      <Login />



      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Thay doi roi con gi</p>
        <p>Thay doi roi con gi</p>
        <p>Thay doi roi con gi</p>
        <p>Thay doi roi con gi</p>
        <p>Thay doi roi con gi</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
