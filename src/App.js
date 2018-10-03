import React, { Component } from 'react';
import Recipe from "./components/Recipe/Recipe";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Recipe 
          title="Pasta" 
          ingredients={["Flour", "Water"]}
          img="spaghetti.jpg"
          instructions="Mix Ingredients"/>
      </div>
    );
  }
}

export default App;
