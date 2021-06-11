import React from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { useUserData } from "../contexts/UserDataContext";
import RecipeList from "./RecipeList";

const Dashboard = () => {
    const { logout } = useAuth();
    const history = useHistory();

    const user = useAuth().currentUser;
    console.log(user);
    const data = useUserData();
    return (
        <div>
            <h1>The Recipe Book</h1>
            <h2>Dashboard</h2>
            <p>Welcome, {user.displayName}.</p>

            <RecipeList />
        </div>
    );
};

export default Dashboard;
