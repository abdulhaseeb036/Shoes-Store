import React from 'react';
import Navbar from './navbar/navbar';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function ReactRouter() {
    return (
        <div>
            <Router>
                <Switch>
                <Navbar />
                    <Route path="/" element={Header}></Route>
                    <Route path="/products" element={Products}></Route>
                    <Route path="/products/products-details" element={ProductDetails}></Route>
                    <Route path="/signin" element={Signin}></Route>
                    <Route path="/signup" element={Signup}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default ReactRouter;
