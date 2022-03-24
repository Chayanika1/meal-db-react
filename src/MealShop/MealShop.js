import React, { useEffect, useState } from 'react';
import Meal from './Meal/Meal';

const MealShop = () => {
    const[meals,setMeals]= useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(response=>response.json())
        .then(data=>setMeals(data.meals))
       
    },[])
    return (
        <div>
            <h1>{meals.length}</h1>
           {
               meals.map(meal=><Meal meal={meal}></Meal>)
           }
           
           
           
           
            
        </div>
    );
};

export default MealShop;
