import React, {Component} from 'react';
import './movies.styles.css';

class Movies extends Component {
    constructor(){
        super()
        this.state = { 
            movies: [],
        }
    }


    componentDidMount(){
    }

    render(){

        return(
            <div>
                <h1>Movies</h1>
            </div>
        )
    }
}

export default Movies
