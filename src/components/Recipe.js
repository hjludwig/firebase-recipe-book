import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useUserData } from "../contexts/UserDataContext";

const Recipe = ({ match }) => {
    const {
        params: { id },
    } = match;
    const data = useUserData();

    const recipe = data.recipes.find(recipe => recipe.id === id);
    const { name, ingredients, steps } = recipe;
    return (
        <div>
            <h1>{name}</h1>
            <h2>Ingredients: </h2>
            <ul>
                {ingredients.map(ingredient => (
                    <li>
                        <span>{`${ingredient.quantity} `}</span>
                        {ingredient.name}
                    </li>
                ))}
            </ul>
            <h2>Directions:</h2>
            <ol>
                {steps.map(step => (
                    <li>{step}</li>
                ))}
            </ol>
            <Link to="/recipes">Back to recipes</Link>
        </div>
    );
};

export default Recipe;
