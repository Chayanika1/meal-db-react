import React from 'react';

const Meal = (props) => {
    const{strMeal}=props.meal;
    return (
        <div>
            <h2>name:{strMeal}</h2>
            
        </div>
    );
};

export default Meal;