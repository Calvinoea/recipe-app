import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

    const APP_ID = '6c832971';
    const APP_KEY = 'd7902282d8210656c4df0311e41673c3';

    const [rescipes, setRecipes] = useState([]);


    useEffect(() => {

        getRecipes();

    }, [])


    const getRecipes = async() => {

        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        setRecipes(data.hits);


    }



    return ( <
        div className = "App" >
        <
        form className = "search-form" >
        <
        input className = "search-bar"
        type = "text/" / >
        <
        button className = "search-button"
        type = "submit" >
        Search < /button>  < /
        form >

        <
        /
        div >

    );

};


export default App;