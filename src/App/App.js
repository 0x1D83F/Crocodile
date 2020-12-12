import './App.css';
import React from 'react';
import Header from "../Components/Header/Header";

export default class App extends React.Component{
    render(){
        return(
        <div className="App">
            <Header state={this.props.state}/>
            <div className="container">
            </div>
        </div>
        )
    }
}


