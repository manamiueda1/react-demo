import React from 'react';
import {Link} from 'react-router-dom'
import './Home.styles.css'

const Home = () => {
    return (
        <div>
            <Link to='/students'>STUDENTS</Link>
            <Link to='/form'>FORM</Link>

            <h1>React V3 Notes</h1>
        </div>
        
    )
}

export default Home