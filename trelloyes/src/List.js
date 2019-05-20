import React from 'react';

import './styles/List.css';

import Card from './Card';

function List(props) {
  return (
    <section className="List">
      <header class="List-header">
        <h2>First list</h2>
      </header>
      <div className="List-cards">
      </div>
    </section>
  );
};

export default List;