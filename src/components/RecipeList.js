import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Route, useParams } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { useUserData } from "../contexts/UserDataContext";
import Recipe from "./Recipe";

const RecipeList = ({ match, location }) => {
    const data = useUserData();
    console.log(data);
    console.log(match, location);
    // const { id } = useParams();
    return (
        <div>
            <Nav />
            <h2>Your recipes</h2>
            {data.recipes?.length === 0 || !data.recipes ? (
                <p>You haven't added any recipes yet.</p>
            ) : (
                <ul>
                    {data.recipes.map(recipe => (
                        <li>
                            <Link to={`/recipes/${recipe.id}`}>
                                {recipe.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

            <Link to="/add-recipe">
                <Button>Add a recipe</Button>
            </Link>
        </div>
    );
};

export default RecipeList;
