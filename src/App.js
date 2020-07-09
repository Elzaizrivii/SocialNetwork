import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Music from './Components/Music/Music';
import {BrowserRouter, Route} from 'react-router-dom';
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";
import Dialogs from "./Components/Dialogs/Dialogs";
import ActiveDialog from "./Components/Dialogs/ActiveDialog/ActiveDialog";
import ActiveDialogContainer from "./Components/Dialogs/ActiveDialog/ActiveDialogContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className='app-wrapper-content'>
                    <Navbar/>
                    <Route exact path='/Profile' render={() =>
                        <Profile
                            store={props.store}
                        />}
                    />
                    <Route exact path='/Dialogs' render={() =>
                        <Dialogs
                            store={props.store}
                        />}
                    />
                    <Route exact path='/News' render={() => <News/>}/>
                    <Route exact path='/Music' render={() => <Music/>}/>
                    <Route exact path='/Settings' render={() => <Settings/>}/>
                    <Route exact path={'/dialogs/1'} render={() =>
                        <ActiveDialogContainer
                            store={props.store}
                        />}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;