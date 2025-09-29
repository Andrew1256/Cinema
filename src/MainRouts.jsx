import React from "react";
import {HashRouter, Route, Routes} from 'react-router-dom';
import {App} from './App.jsx';
import {Navbar} from './NavBar/Navbar.jsx';
import {Schedule} from "./Schedule/Schedule.jsx";
import {Cinema} from "./Cinema/Cinema.jsx";
import {ContactsPage} from "./Conatcts/Contacts.jsx";

export const MainRouts = () => (
    <HashRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route index element={<Navbar/>}/>
            </Route>
            <Route path='/schedule' element={<Schedule/>}>
                <Route index element={<Navbar/>}/>
            </Route>
            <Route path='/cinema' element={<Cinema/>}>
                <Route index element={<Navbar/>}/>
            </Route>
            <Route path='/contacts' element={<ContactsPage/>}>
                <Route index element={<Navbar/>}/>
            </Route>
        </Routes>
    </HashRouter>
)
