import React, { useEffect, useState } from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import { Button } from '@material-ui/core';
import '../style/DetailStyle.css'


import Map from '../components/Map'




export default props => {
    
    const[restaurant, setRestaurant] = useState({})
    useEffect( () => {
        axios.get("http://localhost:8000/api/restaurant/" + props.id)
        .then(res => setRestaurant(res.data))
    }, [])
    
    const onClickHandler = e => {
        e.preventDefault();
        navigate("/restaurant");
    }
    
    const renderSwitch = () => {
        let bgColor;
        switch(restaurant.foodType){
            case "Bar":
                bgColor = "green";
                    break;
            case "Mexican":
                    bgColor = "blue";
                    break;
            case "American":
                    bgColor = "red"
                    break;
                }
            return bgColor;
    }
                
    


    return(
        <>

        <div style={{backgroundColor: renderSwitch()}} className="detailContainer">
            <h2>{restaurant.name}</h2>
            <p>Location: {restaurant.location}</p>
            <p>Description: {restaurant.description}</p>
            <p>Food Type: {restaurant.foodType}</p>
            <p>Price Range: {restaurant.priceRange}</p>

            <Button variant="contained" color="primary" onClick={onClickHandler}>Back to main page</Button><br/><br/>
            <div className="mapContainer">
                <Map />
            </div>
        </div>
        </>
    )
}