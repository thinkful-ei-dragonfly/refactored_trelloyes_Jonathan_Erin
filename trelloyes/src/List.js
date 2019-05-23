import React from 'react';

import './styles/List.css';

import Card from './Card';

function List(props) {
  const cards = props.cards.map((card, i) => {
    return(
      <Card key={i} title={card.title} content={card.content} deleteItem={() => props.handleDelete(props.id)} />
    )
  }); 
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {cards}
        <button type="button" className="List-add-button">+ Add Random Card</button>
      </div>
    </section>
  );
};

export default List;