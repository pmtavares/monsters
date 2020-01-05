import React from 'react';
import './card.style.css'


export const Card = props =>
{
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set3&size=160x160`} alt="monster"/>
            <h3> {props.monster.name}  </h3>
            <h5>{props.monster.email}</h5>
        </div>    
    )
}