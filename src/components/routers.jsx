import React from 'react';
import Navbar from './navbar/navbar';
import Home from '../components/home/home'
import Signin from '../components/sigin/signin'
import Signup from '../components/signup/signup'
import Profile from '../components/profile/profile'
import Products from '../components/products/products'
import Productsdetail from '../components/productsDetals/productsdetail'

import { BrowserRouter, Routes, Route,} from 'react-router-dom';


function ReactRouter() {
    return (
        <div>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />}>
                    <Route  path=":slug" element={<Productsdetail />}></Route>
                    </Route>
                    <Route  path="products" element={<Products />}></Route>
                    <Route  path="signin" element={<Signin />}></Route>
                    <Route  path="signup" element={<Signup />}></Route>
                    <Route  path="profile" element={<Profile />}></Route>
                    <Route  path="*" element={"not found"}></Route>
                </Routes>
            </BrowserRouter>
        </div>


    )
}

export default ReactRouter;
