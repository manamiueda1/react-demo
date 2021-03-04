import React from 'react';
import './search.styles.css'

const Search = ({handleChange}) => {
    return (
        <div className='searchContainer'>
            <input className='search' type='search' placeholder='Search' onChange={handleChange}/>
        </div>
    )
}

export default Search