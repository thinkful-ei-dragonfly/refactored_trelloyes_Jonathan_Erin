import React from 'react';

import './styles/Card.css';

function Card(props) {
  
  onDelete = e => {
    props.deleteItem(e.target);
  }
  
  render(){
    
    <div className="Card">
      <button onClick={this.onDelete} type="button">Delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  
}
}

export default Card;