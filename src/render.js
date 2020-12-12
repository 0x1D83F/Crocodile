import ReactDOM from "react-dom";
import React from 'react'
import App from "./App/App";
import state from "./State/State";
import './Default/null.scss';
import './Default/var.scss'

export let renderEntireTree = () =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
renderEntireTree();