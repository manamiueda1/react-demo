import React from 'react';
import './card.styles.css'

const Card = props => {
    return(
        <div className='card-container'>
            <img alt='monster' src={`https://robohash.org/${props.singleMonster.id}?set=set2&size=180x180`}/>
            <h1>{props.singleMonster.name}</h1>
            <p>{props.singleMonster.email}</p>
            <p>{props.singleMonster.phone}</p>
      </div>
    )
}

export default Card