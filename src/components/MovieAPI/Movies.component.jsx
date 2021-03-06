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
        fetch(`https://api.themoviedb.org/3/list/1?api_key=67095d224daa8dc607d145fc46fb7c47`)
            .then(data => data.json())
            .then(response => response)
            .then(data => this.setState({movies: data.items}))
    }

    // componentDidMount(){
    //     fetch(`https://api.themoviedb.org/3/movie/551?api_key=67095d224daa8dc607d145fc46fb7c47`)
    //         .then(data => data.json())
    //         .then(response => console.log(response))
    // }

    render(){
console.log(this.state.movies)
        return(
            <div>
                <h1>Movies</h1>
                {this.state.movies.map(movie => <p>{movie.title}</p>)}
            </div>
        )
    }
}

export default Movies
