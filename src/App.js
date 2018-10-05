import React, { Component } from 'react';
import RecipeList from "./components/RecipeList/RecipeList";
import NavBar from "./components/NavBar/NavBar";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <RecipeList />
      </div>
    );
  }
}

export default App;
