import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Fonts/css/font-awesome.css'
import App from './App';
import {addPost} from "./Redux/state";

export let renderEnterTree=(state)=>{
    ReactDOM.render(<App state={state} addPost={addPost}/>, document.getElementById('root'));
};
