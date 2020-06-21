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
                        <Route exact path='/Profile' component={Profile}/>
                        <Route exact path='/Dialogs' component={Dialogs}/>
                        <Route exact path='/News' component={News}/>
                        <Route exact path='/Music' component={Music}/>
                        <Route exact path='/Settings' component={Settings}/>
                    </div>
            </div>
        </BrowserRouter>
    );
};

export default App;