import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
    return (
        <div>
            <h1>Nothing's here</h1>
            <Link to="/">Go back home</Link>
        </div>
    );
};

export default NoMatch;
