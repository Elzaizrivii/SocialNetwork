import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Music from './Music/Music';
import {BrowserRouter, Route} from 'react-router-dom';
import Settings from "./Settings/Settings";
import News from "./News/News";
import Dialogs from "./Dialogs/Dialogs";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile' component={Profile}/>
                    <Route path='/Dialogs' component={Dialogs}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;