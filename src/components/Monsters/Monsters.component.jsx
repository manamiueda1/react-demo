import React, {Component} from 'react';
import './monsters.styles.css';
import CardList from './CardList/CardList.component'
import Search from './Search/Search.component'

class Monsters extends Component {
    constructor(){
        super()
        this.state = { 
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json()
            .then((data) => this.setState({monsters: data})))
    }

    render(){
        const {monsters, searchField} = this.state;
        const filtered = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        )

        return(
            <div>
                <h1>Monsters</h1>
                <Search handleChange={(event) => this.setState({searchField: event.target.value})}/>
                <CardList monsters={filtered}/> 
            </div>
        )
    }
}

export default Monsters

