import React from 'react';
import logo from './logo.svg';
import './App.css';

// FIXME: webpack should change the hostname in development/production accordingly
const hostUrl = "ec2-18-216-98-153.us-east-2.compute.amazonaws.com";

function App() {
  const getMessage = () => fetch(`http://${hostUrl}:3000/hello`)
    .then((res) => res.text())
    .then(console.log)
    .catch(console.log);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getMessage}>Fetch it!</button>
      </header>
    </div>
  );
}

export default App;
