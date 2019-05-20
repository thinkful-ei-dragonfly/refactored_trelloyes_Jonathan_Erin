import React from 'react';
import logo from './logo.svg';
import './styles/App.css';

import List from './List';
import STORE from './store';

function App(props) {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
      </div>
    </main>
  );
}

export default App;
