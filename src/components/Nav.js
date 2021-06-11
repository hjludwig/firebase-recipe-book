import { Button } from "react-bootstrap";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Nav = () => {
    const { logout } = useAuth();
    const history = useHistory();
    const handleClick = async () => {
        await logout();
        history.push("/login");
    };
    return (
        <nav className="d-flex justify-content-between align-items-center py-3">
            <Link to="/">Dashboard</Link>
            <Button primary onClick={handleClick}>
                Log Out
            </Button>
        </nav>
    );
};

export default Nav;
