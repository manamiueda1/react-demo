import React, {Component} from 'react';
import './monsters.styles.css';

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
        console.log(this.state)
        return(
            <div>
                <h1>Monsters</h1>
                {
                    this.state.monsters.map(monster => 
                        <div key={monster.id}>
                            <h1>{monster.name}</h1>
                            <p>{monster.email}</p>
                            <p>{monster.username}</p>
                        </div>
                    )
                }
                
            </div>
        )
    }
}

export default Monsters

