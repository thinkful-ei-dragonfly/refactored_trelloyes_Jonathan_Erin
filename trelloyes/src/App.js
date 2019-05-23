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


  omit(obj, keyToOmit) {
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
        key === keyToOmit ? newObj : { ...newObj, [key]: value },
      {}
    );
  }

handleDelete = (Itemid) => {
  console.log('handleDelete')
  console.log(Itemid);
  const newState = this.omit(this.state.allCards, Itemid)
  console.log(newState);
  this.setState({
    allCards: newState,
  })
}

// newRandomCard = () => { //need to refactor
//   const id = Math.random().toString(36).substring(2, 4)
//     + Math.random().toString(36).substring(2, 4);
//   return {
//     id,
//     title: `Random Card ${id}`,
//     content: 'lorem ipsum',
//   }
// }

handleNewCard = (Listid) => {
  console.log(Listid);
  
  // const newRandomCard = () => { //need to destructure
  //   const id = Math.random().toString(36).substring(2, 4)
  //     + Math.random().toString(36).substring(2, 4);
  //   return {
  //     id,
  //     title: `Random Card ${id}`,
  //     content: 'lorem ipsum',
  //   }
  // }
  // const newCard = newRandomCard();
  // const newCardId = newCard.id
  // console.log(newCardId); 
  // const newCards = { ...this.state.allCards, newCardId: newCard }

  // const targetList = this.state.lists.find(item => item.id === Listid)
  // console.log(targetList);
  // targetList.cardIds = [...targetList.cardIds, newCard.id]

  // const newLists = this.state.lists.map(item => item.id === Listid ? targetList : item)

  const id = Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4);
  const newCard = {
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }

  const newCardList = {...this.state.allCards, [id]: newCard}

  const newLists = this.state.lists.map(list => {
    if (list.id === Listid) {
      return {...list, cardIds: [...list.cardIds, id]}
    } else {
      return list;
    }
  })

  this.setState({
    lists: newLists, //this.state.lists.map(...)
    allCards: newCardList,
  })
}


render() {
  const cardLists = this.state.lists.map(list => {
    // console.log(list.cardIds);
    const cards = list.cardIds.map(id => {
      return this.state.allCards[id];
    })
    // console.log(cards);
    return <List Listid={list.id} key={list.id} header={list.header} cards={cards} deleteItem={this.handleDelete} makeNewCard={this.handleNewCard}/>;
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
