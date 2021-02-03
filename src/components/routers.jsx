import React from 'react';
import Navbar from './navbar/navbar';
import Home from '../components/home/home'
import Signin from '../components/sigin/signin'
import Signup from '../components/signup/signup'

import { BrowserRouter, Routes, Route,} from 'react-router-dom';


function ReactRouter() {
    return (
        <div>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route  path="signin" element={<Signin />}></Route>
                    <Route  path="signup" element={<Signup />}></Route>
                    <Route  path="*" element={"not found"}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ReactRouter;
