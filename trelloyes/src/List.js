import React from 'react';

import './styles/List.css';

import Card from './Card';

function List(props) {
  const cards = props.cards.map((card, i) => {
    // console.log(card.title);
    return(
      <Card Itemid ={i} key={i} title={card.title} content={card.content} deleteItem={() => props.deleteItem(props.Itemid)} makeNewCard={() => props.makeNewCard(props.Listid)} />
    )
  }); 

  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {cards}
        <button onClick={() => props.makeNewCard(props.Listid)} type="button" className="List-add-button">+ Add Random Card</button>
      </div>
    </section>
  );
};

export default List;