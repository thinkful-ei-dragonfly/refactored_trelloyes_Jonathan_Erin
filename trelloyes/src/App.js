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
      cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
    },
    {
      id: '2',
      header: 'Second list',
      cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
    },
    {
      id: '3',
      header: 'Third list',
      cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
    },
    {
      id: '4',
      header: 'Fourth list',
      cardIds: [ 'l', 'm' ],
    },
  ],
  allCards: {
    'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
    'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
    'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
    'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
    'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
    'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
    'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
    'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
    'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
    'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
    'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
    'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
    'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
  },
}


  omit(obj, keyToOmit) {
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
        key === keyToOmit ? newObj : { ...newObj, [key]: value },
      {}
    );
  }

  handleDelete = (Cardid) => {

    const { lists, allCards } = this.state
    console.log('handleDelete')
    console.log(Cardid);
    const newCards = this.omit(allCards, Cardid)
    console.log(newCards);

    const newLists = lists.map(list => (
      { ...list, cardIds: list.cardIds.filter(id => id !== Cardid) }
    ))

    this.setState({
      lists: newLists,
      allCards: newCards,
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
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }

    const newCardList = { ...this.state.allCards, [id]: newCard }

    const newLists = this.state.lists.map(list => {
      if (list.id === Listid) {
        return { ...list, cardIds: [...list.cardIds, id] }
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
      return <List Listid={list.id} key={list.id} header={list.header} cards={cards} deleteItem={this.handleDelete} makeNewCard={this.handleNewCard} />;
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
