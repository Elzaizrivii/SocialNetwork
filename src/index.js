import * as serviceWorker from './serviceWorker';
import store from "./Redux/reduxStore";
import React from "react";
import App from "./App";
import ReactDOM from 'react-dom'
import './Fonts/css/font-awesome.css';
import StoreContext from "./reactStoreContext";
import {Provider} from 'react-redux';


let renderEnterTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>, document.getElementById('root'));
};

renderEnterTree();

store.subscribe(()=>{
    renderEnterTree();
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
