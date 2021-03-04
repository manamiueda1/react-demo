import React from 'react';
// import Card from '../Card/Card.component'
import './cardList.styles.css'
import Card from '../Card/Card.component'

const CardList = (props) => {
    return (
        <div className='card-list'>
            {props.monsters.map(monster => 
                <Card key={monster.id} singleMonster={monster}/>
            )}
        </div>
    )  
}

export default CardList