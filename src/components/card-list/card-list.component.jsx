import React from 'react'
import { Card } from '../card/card.component';
import './card-list.style.scss'

export const CardList = props => {
    let { monsters } = props;
    return (
        <div className='card-list'>
            {monsters && monsters.length && monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    )
}