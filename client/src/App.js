import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import landingPage from "./components/views/landingPage/landingPage";
import loginPage from "./components/views/loginPage/loginPage";
import register from "./components/views/RegisterPage/register";

function App() {
  return (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={landingPage}>
                </Route>
                <Route exact path="/login" component={loginPage}>
                </Route>
                <Route exact path="/register" component={register}>
                </Route>
            </Switch>
        </div>
    </Router>
  );
}


export default App;
