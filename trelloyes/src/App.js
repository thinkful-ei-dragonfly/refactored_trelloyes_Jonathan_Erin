import React from 'react';
import logo from './logo.svg';
import './styles/App.css';

import List from './List';
import STORE from './store';

function App(props) {
  const cardLists = STORE.lists.map(list => {
    const cards = list.cardIds.map(id => {
      return STORE.allCards[id];
    })
  return <List key={list.id} header={list.header} cards={cards}/>;
})
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {cardLists}
      </div>
    </main>
  );
}

export default App;
