import React, {Component} from 'react';
import './Form.styles.css'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            savedUsername: 'Pal'
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }) 
    } 

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            username: '',
            password: '',
            savedUsername: this.state.username
        })
        console.log(this.state)
    }

    render(){
        console.log(this.state, 'this.state')
        return (
            <div>
                <h1>Welcome {this.state.savedUsername}</h1>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>username:</label>
                    <input type='text' name='username' value={this.state.username} onChange={this.handleChange}></input>


                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button type='submit'>Submit</button>

                </form>
            </div>
        )
    }
}

export default Form 