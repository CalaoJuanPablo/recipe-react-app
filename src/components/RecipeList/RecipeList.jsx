import React, { Component } from "react";
import Recipe from "../Recipe/Recipe";
import "./RecipeList.css";

export default class RecipeList extends Component {
  render(){
    const recipes = this.props.recipesArray.map((recipe, index) => {
      return <Recipe key={index} recipe={recipe} />
    });
    return(
      <div className="recipe-list">
        {recipes}
      </div>
    )
  }
}