import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Fonts/css/font-awesome.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'hello World', like: 22, dislike: 111},
    {id: 2, message: 'norm', like: 32, dislike: 1},
    {id: 3, message: 'norm', like: 2, dislike: 0},
    {id: 4, message: 'insert', like: 6, dislike: 1},
];

let dialogs = [
    {id: 1, name: "Temirhan"},
    {id: 2, name: "Aliya"},
    {id: 2, name: "Alihan"}
];

let messages = [
    {id: 1, message: "Hello"},
    {id: 2, message: "Hi"},
    {id: 2, message: "Yo"}
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
