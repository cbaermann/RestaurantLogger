import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { Button } from '@material-ui/core';

export default props => {
    const {initialName, initialLocation, initialDescription, initialFoodType, onSubmitProp} = props;
    const[name, setName] = useState(initialName);
    const[location, setLocation] = useState(initialLocation);
    const[description, setDescription] = useState(initialDescription);
    const[foodType, setFoodType] = useState(initialFoodType);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name, location, description, foodType});
        navigate("/restaurant")
    }

    const onClickHandler = e =>{
        e.preventDefault();
        navigate("/restaurant")
    }

    return(
        <>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name:</label><br/>
                <input
                    type="text"
                    name="name" value={name}
                    onChange={(e)=>{setName(e.target.value) }}/>
            </p>
            <p>
                <label>Location:</label><br/>
                <input
                    type="text"
                    name="location" value={location}
                    onChange={(e)=>{setLocation(e.target.value) }}/>
            </p>
            <p>
                <label>Description:</label><br/>
                <input
                    type="text"
                    name="description" value={description}
                    onChange={(e)=>{setDescription(e.target.value) }}/>
            </p>
            <p>
                <label>Food Type:</label><br/>
                <input
                    type="text"
                    name="foodType" value={foodType}
                    onChange={(e)=>{setFoodType(e.target.value) }}/>
            </p>
            <input type="submit"/>
        </form>
        <Button variant="contained" color="default" onClick={onClickHandler}>Cancel</Button>
        </>
    )
}