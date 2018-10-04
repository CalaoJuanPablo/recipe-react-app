import React, { Component } from "react";
import Recipe from "../Recipe/Recipe";
import "./RecipeList.css";

export default class RecipeList extends Component {
  render(){
    const recipesArray = [
      {
        title: "Spaghetti",
        instructions: "Open jar or Spagheti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce",
        ingredients: ["Pasta", "8 cups water", "1 box spaghetti"],
        img: "./img/spaghetti.jpg"
      },
      {
        title: "Milkshake",
        instructions: "Combine ice cream and link. Blend until creamy",
        ingredients: ["2 Scoops Ice Cream", "8 cups of milk"],
        img: "./img/milkshake.jpg"
      },
      {
        title: "Avocado Toast",
        instructions: "Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste",
        ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
        img: "./img/avocado_toast.jpg"
      }
    ]
    const recipes = recipesArray.map((recipe, index) => {
      return <Recipe key={index} recipe={recipe} />
    });
    return(
      <div className="recipe-list">
        {recipes}
      </div>
    )
  }
}