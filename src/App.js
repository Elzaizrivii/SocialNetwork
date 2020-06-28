import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Music from './Components/Music/Music';
import {BrowserRouter, Route} from 'react-router-dom';
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";
import Dialogs from "./Components/Dialogs/Dialogs";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/Profile' render={() =>
                        <Profile
                            posts={props.state.profilePage.posts}
                        />}
                    />
                    <Route exact path='/Dialogs' render={() =>
                        <Dialogs
                            dialogs={props.state.dialogPage.dialogs}
                            messages={props.state.dialogPage.messages}
                        />}
                    />
                    <Route exact path='/News' render={() => <News/>}/>
                    <Route exact path='/Music' render={() => <Music/>}/>
                    <Route exact path='/Settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;