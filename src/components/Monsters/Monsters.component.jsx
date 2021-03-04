import React, {Component} from 'react';
import './monsters.styles.css';
import CardList from './CardList/CardList.component'

class Monsters extends Component {
    constructor(){
        super()
        this.state = { 
            monsters: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json()
            .then((data) => this.setState({monsters: data})))
    }

    render(){
        return(
            <div>
                <h1>Monsters</h1>
                <CardList monsters={this.state.monsters}/> 
            </div>
        )
    }
}

export default Monsters

