import React from 'react';
import GlobalStyle from './global_reset_css/GloBalStyles';
//import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from "./components/views/header/header";
import Footer from "./components/views/Footer/footer";
import LandingPage from "./components/views/landingPage/landingPage";
import loginPage from "./components/views/loginPage/loginPage";
import register from "./components/views/RegisterPage/register";
import border from './components/views/border/Border';
import Nav from "./components/views/NavBar/nav"
import axios from "axios";


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
                        <Route exact path="/border" component={border}>
                        </Route>
                    </Switch>
                </div>
            </Router>
            <Footer></Footer>
        </React.Fragment>
    );
}


export default App;
