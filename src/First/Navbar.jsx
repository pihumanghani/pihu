import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Error from './Error';
import Menu from './Menu';
import Footer from "./Footer";
import "./Menu.css";

const Navbar = () => {
    return (
        <>
        <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/services" component={Services} />
                <Redirect to="/" />
            </Switch>  
                <Footer />            
        </>
        );
};

export default Navbar;
