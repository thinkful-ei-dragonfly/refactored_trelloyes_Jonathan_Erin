import React from 'react';

import './styles/Card.css';

function Card(props) {
  
  return (
    
    <div className="Card">
      <button onClick={() => props.deleteItem(props.Itemid)} type="button">Delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}
//hello

export default Card;