import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

    const APP_ID = '6c832971';
    const APP_KEY = 'd7902282d8210656c4df0311e41673c3';

    const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

    return ( <
        div className = "App" >
        <
        form className = "search-form" >
        <
        input className = "search-bar"
        type = "text/" / >
        <
        button className = "search-button"
        type = "submit" > Search < /button>  < /
        form > < /
        div >

    );

};


export default App;