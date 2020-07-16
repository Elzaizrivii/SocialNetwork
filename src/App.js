import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Music from './Components/Music/Music';
import {Route} from 'react-router-dom';
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ActiveDialogContainer from "./Components/Dialogs/ActiveDialog/ActiveDialogContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = () => {

    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='app-wrapper-content'>
                    <Navbar/>
                    <Route path='/profile/:id?' render={() =>
                        <ProfileContainer/>}
                    />
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer/>}
                    />
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                    <Route path='/dialogs/active/:id?' render={() =>
                        <ActiveDialogContainer/>}
                    />
                    <Route path='/Users' render={() =>
                        <UsersContainer/>}
                    />
                </div>
            </div>
    );
};

export default App;