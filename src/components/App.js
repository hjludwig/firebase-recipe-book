import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import { UserDataProvider } from "../contexts/UserDataContext";
import AddRecipe from "./add-recipe/AddRecipe";
import RecipeList from "./RecipeList";
import Recipe from "./Recipe";
import Nav from "./Nav";
import NoMatch from "./NoMatch";

function App() {
    return (
        <AuthProvider>
            <UserDataProvider>
                <Container>
                    <div className="w-100" style={{ maxWidth: "800px" }}>
                        <Router>
                            <Nav />
                            <PrivateRoute
                                exact
                                path="/"
                                component={Dashboard}
                            />
                            <PrivateRoute
                                path="/add-recipe"
                                component={AddRecipe}
                            />
                            <Route exact path="/login" component={Login} />
                            <Route path="/signup" component={Signup} />
                            <Route
                                exact
                                path="/recipes"
                                component={RecipeList}
                            />
                            <Route
                                exact
                                path="/recipes/:id"
                                component={Recipe}
                            />
                        </Router>
                    </div>
                </Container>
            </UserDataProvider>
        </AuthProvider>
    );
}

export default App;
