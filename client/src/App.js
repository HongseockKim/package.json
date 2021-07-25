import React from 'react';
import GlobalStyle from './global_reset_css/GloBalStyles';
//import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from "../src/components/views/header/header";
import Footer from "../src/components/views/Footer/footer";
import LandingPage from "./components/views/landingPage/landingPage";
import loginPage from "./components/views/loginPage/loginPage";
import register from "./components/views/RegisterPage/register";
import Nav from "./components/views/NavBar/nav"



function App() {
    return (
        <React.Fragment>
            <GlobalStyle></GlobalStyle>
            <Header></Header>
            <Router>
                <div className={'nav_wrap'}>
                    <Nav></Nav>
                </div>
                <div className={'main'}>
                    <Switch>
                        <Route exact path="/" component={LandingPage}>
                        </Route>
                        <Route exact path="/login" component={loginPage}>
                        </Route>
                        <Route exact path="/register" component={register}>
                        </Route>
                    </Switch>
                </div>
            </Router>
            <Footer></Footer>
        </React.Fragment>
    );
}


export default App;
