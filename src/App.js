import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Navbar from "./Navbar";
import Content from "./Content";

const App = () => {
    return (
        <div className='app-wraper'>
            <Header/>
            <Navbar/>
            <Content/>
        </div>
    );
};

export default App;