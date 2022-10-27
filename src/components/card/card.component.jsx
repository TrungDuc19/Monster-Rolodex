import React from "react";
import './card.style.scss'

export const Card = props => {
    let { id, name, email } = props.monster;
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="monster" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}