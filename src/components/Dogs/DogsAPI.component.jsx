import React, { Component } from "react";
import "./DogsAPI.styles.css";

class DogAPI extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      dogs: [],
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random/3").then((response) =>
      response.json().then((data) => this.setState({ dogs: data.message }))
    );
  }


  render() {
   

    return (
      <div >
      

        {this.state.dogs.map((dog) => (
          <img alt="randomDogs" src={dog} />
        ))}
      </div>
    );
  }
}

export default DogAPI;
