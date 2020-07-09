import * as serviceWorker from './serviceWorker';
import store from "./Redux/state";
import React from "react";
import App from "./App";
import ReactDOM from 'react-dom'
import './Fonts/css/font-awesome.css';


let renderEnterTree = (state) => {
    ReactDOM.render(<App
        state={state}
        dispatch={store.dispatch.bind(store)}
        store={store}
    />, document.getElementById('root'));
};

renderEnterTree(store.getState());

store.subscribe(renderEnterTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
