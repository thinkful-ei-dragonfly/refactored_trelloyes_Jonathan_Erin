import React from 'react';
import logo from './logo.svg';
import './styles/App.css';

import List from './List';


class App extends React.Component {
  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: ['a', 'b', 'e', 'f', 'g', 'j', 'l', 'm'],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: ['l', 'm'],
      },
    ],
    allCards: {
      'a': { title: 'First card', content: 'lorem ipsum' },
      'b': { title: 'Second card', content: 'lorem ipsum' },
      'c': { title: 'Third card', content: 'lorem ipsum' },
      'd': { title: 'Fourth card', content: 'lorem ipsum' },
      'e': { title: 'Fifth card', content: 'lorem ipsum' },
      'f': { title: 'Sixth card', content: 'lorem ipsum' },
      'g': { title: 'Seventh card', content: 'lorem ipsum' },
      'h': { title: 'Eighth card', content: 'lorem ipsum' },
      'i': { title: 'Ninth card', content: 'lorem ipsum' },
      'j': { title: 'Tenth card', content: 'lorem ipsum' },
      'k': { title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { title: 'Twelth card', content: 'lorem ipsum' },
      'm': { title: 'Thirteenth card', content: 'lorem ipsum' },
    },
  }


  omit(obj, keyToOmit){
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
      key === keyToOmit ? newObj : {...newObj, [key]: value},
      {}
    );
  }

  }
  handleDelete = (Itemid) => {
    console.log('handleDelete')
    const newState = omit(state.allCards, Itemid)
    this.setState({
      allCards: newState,
    })
    }

    handleNewCard = (Listid) => {
      const newRandomCard = () => {
        const id = Math.random().toString(36).substring(2, 4)
          + Math.random().toString(36).substring(2, 4);
        return {
          id,
          title: `Random Card ${id}`,
          content: 'lorem ipsum',
        }
      }
      const newCards = {...allCards, newRandomCard}
      const targetList = state.lists.find(item => item.id === Listid)
      targetList.cardIds = [...cardIds, newRandomCard.id]
      this.setState({
        lists: ,
        allCards: newCards,
      })
    }


  render() {
    const cardLists = this.state.lists.map(list => {
      const cards = list.cardIds.map(id => {
        return this.state.allCards[id];
      })
      return <List key={list.id} header={list.header} cards={cards} deleteItem={this.handleDelete} />;
    })
    return (
      <main className="App" >
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {cardLists}
        </div>
      </main>
    )
  }
}

export default App;
