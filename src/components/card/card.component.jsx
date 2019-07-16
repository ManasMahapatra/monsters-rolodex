import React from 'react';
import './card.style.css';

export const Card = (props) => (
  <div key={props.monster.id} className="card-container">
    <img src={`https://robohash.org/${props.monster.id + 2}?set=set2&size=180x180`} alt=""/>
    <h3>{props.monster.name}</h3>
    <p>{props.monster.email}</p>
  </div>
)
