import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GogoClass } from './GogoClass';
import { GogoParentFunc } from './GogoParentFunc';

function App() {
  console.log('__ render App');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <GogoClass></GogoClass>

      <GogoParentFunc></GogoParentFunc>
    </div>
  );
}

export default App;
