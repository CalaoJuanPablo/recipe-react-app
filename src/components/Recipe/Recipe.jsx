import React, { Component } from "react";
import "./Recipe.css"

export default class Recipe extends Component {
  render() {
    const {title, instructions, img} = this.props.recipe;
    const ingredients = this.props.recipe.ingredients.map((ing, index) => {
      return <li key={index}>{ing}</li>;
    })
    return (
      <div className="recipe-card">
        <div className="recipe-card-image">
          <img src={img} alt={title} />
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-card-title">{title}</h3>
          <h4>Ingredients:</h4>
          <ul>
            {ingredients}
          </ul>
          <h4>Instructions:</h4>
          <p>{instructions}</p>
        </div>
      </div>
    )
  }
}