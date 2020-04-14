import React from 'react';
import logo from './logo.svg';
import './App.css';
import Increament from './components/Increament';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Button>Halo</Button> */}
        <Increament/>
      </header>
    </div>
  );
}

export default App;

// const Button = styled.button `
// background-color:red
// `